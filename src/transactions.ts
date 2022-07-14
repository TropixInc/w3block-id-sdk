import { TransactionPublic } from './interfaces';
import Repository from './repository';

export class Transactions {
  private repository: Repository;
  constructor(repository: Repository) {
    this.repository = repository;
  }

  public getTransactionAt(id: string): Promise<TransactionPublic> {
    return this.getById(id);
  }

  public getById(id: string): Promise<TransactionPublic> {
    return this.repository.get(`/transactions/by-client/${id}`, {}, `Transaction with id ${id} not exist`);
  }

  public getByHash(hash: string): Promise<TransactionPublic> {
    return this.repository.get(`/transactions/by-hash/${hash}`, {}, `Transaction with hash ${hash} not exist`);
  }
}

export default Transactions;
