import lodash from 'lodash';
import queryString from 'query-string';
import Repository from './repository';
import { Format } from './format';
import {
  ContractDeploymentDto,
  ContractPublic,
  DeploymentPublic,
  GetContractsDeploymentByAddressDto,
  GetContractsDeploymentByOwnerDto,
  IContractMethods,
  PaginationResponse,
} from './interfaces';
import { ChainId } from '.';

export default class Contracts {
  private repository: Repository;
  constructor(repository: Repository) {
    this.repository = repository;
  }

  /**
   * It returns a promise that resolves to an object that contains the methods of the contract.
   * @param {string} contractDeploymentId - The ID of the contract deployment.
   * @returns An object that contains the methods of the contract.
   */
  public getContractAt<ContractInterface>(contractDeploymentId: string): Promise<ContractInterface> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.getAbiByContractDeployment(contractDeploymentId).then((methods: IContractMethods[]) => {
      return lodash(methods).keyBy('methodName').mapValues(this.contractService(contractDeploymentId)).value();
    });
  }

  /**
   * Get a contract from a deployment
   * @param {ChainId} chainId - The chainId of the contract.
   * @param {string} address - The address of the contract.
   * @returns The contract instance.
   */
  public async getContract<ContractInterface>(chainId: ChainId, address: string): Promise<ContractInterface> {
    const contract = await this.getDeploymentByAddress({ chainId, address });
    if (!contract?.id) throw Error(`This ${address}/${chainId} not has contract deployment`);
    return await this.getContractAt(contract.id);
  }

  /**
   * Get all the standards from the API
   * @returns An array of contract public objects.
   */
  public getStandards(): Promise<ContractPublic[]> {
    return this.repository
      .get('/contracts/standards')
      .then((res) => {
        return res.items;
      })
      .catch(() => {
        return [];
      });
  }

  /**
   * Get all deployments by owner
   * @param {GetContractsDeploymentByOwnerDto} pagination - GetContractsDeploymentByOwnerDto
   * @returns The response is a paginated response.
   */
  public getDeploymentByOwner(
    pagination: GetContractsDeploymentByOwnerDto,
  ): Promise<PaginationResponse<DeploymentPublic>> {
    return this.repository
      .get(`/contracts/deployment/by-owner?${queryString.stringify(pagination)}`)
      .then((res) => {
        return {
          items: res.items,
          meta: res.meta,
        };
      })
      .catch(() => {
        return {
          items: [],
          meta: {
            totalItems: 0,
            itemCount: 0,
            itemsPerPage: 0,
            totalPages: 0,
            currentPage: 0,
          },
        };
      });
  }

  /**
   * It returns a promise that resolves to a DeploymentPublic object.
   * @param {GetContractsDeploymentByAddressDto} pagination - GetContractsDeploymentByAddressDto
   * @returns The contract deployment details.
   */
  public getDeploymentByAddress(pagination: GetContractsDeploymentByAddressDto): Promise<DeploymentPublic> {
    return this.repository.get(`/contracts/deployment/by-address`, pagination, 'Contract not exist');
  }

  /**
   * It creates a new contract deployment.
   * @param {ContractDeploymentDto} dto - The contract deployment DTO.
   * @returns The contract deployment.
   */
  public createDeployment(dto: ContractDeploymentDto): Promise<DeploymentPublic> {
    return this.repository.post(`/contracts/deployment`, dto, 'Failed create contract');
  }

  /**
   * Clone a contract.
   * @param {string} contractId - The id of the contract you want to clone
   * @param {string} clientId - The client id of the client you want to clone the contract to.
   * @returns A promise of void
   */
  public clone(contractId: string, clientId: string): Promise<void> {
    return this.repository.post(`/contracts/clone`, { contractId, clientId });
  }

  /**
   * It returns a function that will be used to call the contract method.
   * @param {string} contractDeploymentId - The id of the contract deployment.
   * @returns A function that can be called with the arguments of the method.
   */
  private contractService(contractDeploymentId: string) {
    return (method: IContractMethods) => {
      const fns = {
        transaction: this.transactionFn.bind(this),
        call: this.callFn.bind(this),
      };
      return fns[method.type as 'transaction' | 'call'](contractDeploymentId, method);
    };
  }

  /**
   * It gets the contract deployment id from the blockchain and then gets the contract methods from the
   * blockchain.
   * @param {string} contractDeploymentId - The ID of the contract deployment.
   * @returns The `getAbiByContractDeployment` method returns a promise that resolves to an array of
   * `IContractMethods` objects.
   */
  private getAbiByContractDeployment(contractDeploymentId: string): Promise<IContractMethods[]> {
    return this.repository.get(`/blockchain/methods/${contractDeploymentId}`);
  }

  /**
   * It takes a contract deployment ID and a method, and returns a function that can be called with
   * inputs to the method
   * @param {string} contractDeploymentId - The ID of the contract deployment.
   * @param {IContractMethods} method - The method that you want to call on the contract.
   * @returns The `transactionFn` function returns a function that can be called to execute a
   * transaction.
   */
  private transactionFn(contractDeploymentId: string, method: IContractMethods) {
    return (...inputs: unknown[]) => {
      const { from, ether } = inputs.pop() as { from: string; ether?: string };
      if (!from) throw Error('from is required');
      const payload = {
        methodName: method.methodName,
        inputs: inputs,
        from,
        ether,
      };
      return this.repository
        .getApi()
        .post(`/blockchain/transaction/${contractDeploymentId}`, payload)
        .then((res) => res.data)
        .catch((error) => {
          return error?.response?.data;
        });
    };
  }

  /**
   * It takes a contract deployment ID and a method, and returns a function that can be called with
   * inputs
   * @param {string} contractDeploymentId - The ID of the contract deployment.
   * @param {IContractMethods} method - The method to call.
   * @returns The `callFn` function.
   */
  private callFn(contractDeploymentId: string, method: IContractMethods) {
    return (...inputs: unknown[]) => {
      const payload = {
        methodName: method.methodName,
        inputs: inputs,
      };
      return this.repository.post(`/blockchain/call/${contractDeploymentId}`, payload).then((res) => Format.from(res));
    };
  }
}
