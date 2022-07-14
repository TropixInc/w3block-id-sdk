/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ContractDeployResponse, DeployArgs } from './interfaces';
import Repository from './repository';

export default class Deploy {
  private repository: Repository;
  private chainId = 0;
  private from = '';
  private contractSourceId = '';
  private argumentValues: unknown[] = [];

  constructor(repository: Repository) {
    this.repository = repository;
  }

  public setChainId(chainId: number) {
    this.chainId = chainId;
    return this;
  }

  public setFrom(from: string) {
    this.from = from;
    return this;
  }

  public setContractSourceId(contractSourceId: string) {
    this.contractSourceId = contractSourceId;
    return this;
  }

  public setArguments(...args: unknown[]) {
    this.argumentValues = args;
    return this;
  }

  public build(): Promise<ContractDeployResponse> {
    const payload: DeployArgs = {
      contractSourceId: this.contractSourceId,
      chainId: this.chainId,
      from: this.from,
      argumentValues: this.argumentValues,
    };
    return this.repository.post('/blockchain/deploy', payload);
  }
}
