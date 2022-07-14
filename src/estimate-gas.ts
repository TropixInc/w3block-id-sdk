import lodash from 'lodash';
import Repository from './repository';
import { DeploymentPublic, GetContractsDeploymentByAddressDto, IContractMethods } from './interfaces';
import { ChainId, EtherUnitsEnum, Format, formatUnits } from '.';

export default class EstimateGas {
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
   * It returns a promise that resolves to a DeploymentPublic object.
   * @param {GetContractsDeploymentByAddressDto} pagination - GetContractsDeploymentByAddressDto
   * @returns The contract deployment details.
   */
  public getDeploymentByAddress(pagination: GetContractsDeploymentByAddressDto): Promise<DeploymentPublic> {
    return this.repository.get(`/contracts/deployment/by-address`, pagination, 'Contract not exist');
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
        .post(`/blockchain/calculate-gas/${contractDeploymentId}`, payload)
        .then((res) => {
          const totalGasPrice = res.data.totalGasPrice;
          return {
            ...res.data,
            totalGasPrice: {
              safe: totalGasPrice.safe ? formatUnits(totalGasPrice.safe.toString(), EtherUnitsEnum.ETHER) : null,
              proposed: totalGasPrice.proposed
                ? formatUnits(totalGasPrice.proposed.toString(), EtherUnitsEnum.ETHER)
                : null,
              fast: totalGasPrice.fast ? formatUnits(totalGasPrice.fast.toString(), EtherUnitsEnum.ETHER) : null,
            },
          };
        })
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
