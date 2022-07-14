import Repository from './repository';
import { EventListenerDto, EventNotify, PaginationResponse } from './interfaces';
import { ChainId } from './enums';

export default class Events {
  private repository: Repository;
  constructor(repository: Repository) {
    this.repository = repository;
  }

  /**
   * Get all the events that have been notified for a transaction
   * @param {string} transactionId - The transaction ID to get events for.
   * @returns The response is a pagination response.
   */
  public getByTransactionAt(transactionId: string): Promise<PaginationResponse<EventNotify>> {
    return this.repository.get(`/events/transaction/${transactionId}`, {}, 'Transaction not exist');
  }

  /**
   * Listen to all events of a contract
   * @param {string} id - The ID of the deployment.
   * @returns The response is a promise that resolves to the response body.
   */
  public listenAllEventsByDeploymentId(id: string): Promise<void> {
    return this.repository.post(
      `/contracts/deployment/${id}/listen-all-events`,
      {},
      'Failed to listen all events of this contract',
    );
  }

  /**
   * It creates an event listener.
   * @param {EventListenerDto} dto - The data transfer object (DTO) that will be used to create the
   * event listener.
   * @returns Nothing.
   */
  public async createEventListener(dto: EventListenerDto): Promise<void> {
    await this.repository.post(`/events/listeners`, dto, 'Failed to create event listener');
  }

  /**
   * A method that is used to sync events by transaction hash
   * @param {ChainId} chainId - The chain ID of the chain you want to sync events from.
   * @param {string} hash - The transaction hash of the transaction you want to sync.
   */
  public async syncByTransactionHash(chainId: ChainId, hash: string): Promise<void> {
    await this.repository.patch(
      `/events/sync-event-by-transaction`,
      { chainId, hash },
      'Failed to sync event by transaction hash',
    );
  }
}
