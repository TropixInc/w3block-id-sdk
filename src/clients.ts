import { Client, ClientDto } from './interfaces';
import Repository from './repository';

export default class Clients {
  private repository: Repository;
  private baseUrl = '/clients';
  constructor(repository: Repository) {
    this.repository = repository;
  }

  /**
   * It creates a new client with the given client data.
   * @param {ClientDto} client - ClientDto - the client object to be created
   * @returns A promise of a Client
   */
  public create(client: ClientDto): Promise<Client> {
    return this.repository.post(this.baseUrl, client, 'Failed to create client');
  }

  /**
   * It gets a client by id
   * @param {string} id - the id of the client you want to get
   * @returns A promise of a Client
   */
  public getById(id: string): Promise<Client> {
    return this.repository.get(`${this.baseUrl}/${id}`, {}, 'Failed to get client');
  }

  /**
   * Update a client by id with the given client data.
   *
   * @param {string} id - The id of the client to update
   * @param {ClientDto} client - ClientDto - the client object to be updated
   * @returns A promise of a Client
   */
  public update(id: string, client: ClientDto): Promise<Client> {
    return this.repository.patch(`${this.baseUrl}/${id}`, client, 'Failed to update client');
  }
}
