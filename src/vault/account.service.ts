import Repository from '../repository';
import { ClaimResponse } from './interfaces';

export class AccountService {
  private repository: Repository;
  constructor(repository: Repository) {
    this.repository = repository;
  }

  /**
   * It claims an account.
   * @param {string} owner - The owner of the account.
   * @returns The `ClaimResponse` object.
   */
  async claim(owner: string): Promise<ClaimResponse> {
    return this.repository.post<{ owner: string }, ClaimResponse>('/account/claim', { owner });
  }
}
