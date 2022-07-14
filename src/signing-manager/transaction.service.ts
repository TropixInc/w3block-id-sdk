import { SmSignerTypes } from '.';
import { ChainId, PaginationResponse } from '..';
import { filterVoid } from '../helpers';
import Repository from '../repository';
import { SmTransaction, SMTransactionRequest } from './interfaces';

interface CreateTransactionParams {
  data: SMTransactionRequest;
  from: string;
  chainId: number;
  externalId: string;
}

export class TransactionService {
  private repository: Repository;
  constructor(repository: Repository) {
    this.repository = repository;
  }

  /**
   * It creates a new transaction.
   * @param {CreateTransactionParams} params - CreateTransactionParams
   * @returns The SmTransaction object.
   */
  async create(params: CreateTransactionParams): Promise<SmTransaction> {
    return await this.repository.post<CreateTransactionParams, SmTransaction>(`/transactions`, params);
  }

  /**
   * `ack` is a function that takes a transaction id and a transaction hash and returns a boolean
   * indicating whether the transaction was successfully acknowledged
   * @param {string} id - The id of the transaction to ack.
   * @param {string} txHash - The transaction hash of the transaction that was sent to the smart
   * contract.
   * @returns The `ack` function returns a `Promise` of `boolean`.
   */
  async ack(id: string, txHash: string): Promise<boolean> {
    const data = await this.repository.patch<
      {
        txHash: string;
      },
      SmTransaction
    >(`/transactions/${id}/ack`, {
      txHash,
    });

    return data.txHash === txHash;
  }

  /**
   * `abort` is a function that takes a transaction id and a reason and returns a transaction
   * @param {string} id - The ID of the transaction to abort.
   * @param {string} [reason] - The reason for aborting the transaction.
   * @returns The transaction object.
   */
  async abort(id: string, reason?: string): Promise<SmTransaction> {
    return await this.repository.patch<any, SmTransaction>(`/transactions/${id}/abort`, { reason });
  }

  /**
   * `abortExternal` is a function that will abort a transaction that was started by an external system
   * @param {string} id - The ID of the transaction to abort.
   * @param {string} [reason] - The reason for aborting the transaction.
   * @returns The transaction object.
   */
  async abortExternal(id: string, reason?: string): Promise<SmTransaction> {
    return await this.repository.patch<any, SmTransaction>(`/transactions/${id}/abort-external`, { reason });
  }

  /**
   * It returns a list of pending transactions.
   * @param data -
   * @returns PaginationResponse<SmTransaction>
   */
  async getPending(data: {
    address?: string;
    signerType?: SmSignerTypes;
    signer?: string;
    chainId: ChainId;
  }): Promise<PaginationResponse<SmTransaction>> {
    return await this.repository.get<{ address?: string; chainId: ChainId }, PaginationResponse<SmTransaction>>(
      `/transactions/pending`,
      filterVoid<{ address?: string; signerType?: SmSignerTypes; signer?: string; chainId: ChainId }>(data),
    );
  }

  /**
   * It gets a single transaction by ID.
   * @param {string} id - The id of the transaction to retrieve.
   * @returns The SmTransaction object.
   */
  async getOne(id: string): Promise<SmTransaction> {
    return await this.repository.get<any, SmTransaction>(`/transactions/${id}/show`);
  }

  /**
   * It returns a promise that resolves to a SmTransaction object.
   * @param {string} id - The id of the transaction to be retrieved.
   * @returns The transaction object.
   */
  public getByExternalId(id: string): Promise<SmTransaction> {
    return this.repository.get(
      `/transactions/find-by-external-id/${id}`,
      {},
      `Transaction with external id ${id} not exist`,
    );
  }
}
