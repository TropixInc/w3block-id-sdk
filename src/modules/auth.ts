import { ClientProfile } from '..';
import Repository from '../repository';
export class Auth {
  private repository: Repository;
  private baseUrl = '/clients';

  constructor(repository: Repository) {
    this.repository = repository;
  }

  /**
   * It gets the profile of the client with the given api key.
   * @param {string} apiKey - The API key of the client.
   * @returns The client profile.
   */
  public async getInfo(apiKey: string): Promise<ClientProfile> {
    return this.repository.get(`${this.baseUrl}/info/${apiKey}`, {}, 'Client not exist');
  }

  /**
   * "Check if the given API key is valid and active."
   *
   * The function is asynchronous because it makes an API call
   * @param {string} apiKey - The API key to check.
   * @returns A boolean value.
   */
  public async authorized(apiKey: string): Promise<boolean> {
    if (!apiKey) {
      return false;
    }

    try {
      const info = await this.getInfo(apiKey);
      return !!info?.active;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
