import Repository from '../repository';
import { ChainId, PaginationResponse } from '..';
import { SmSigner } from './interfaces';

export class SignerService {
  private repository: Repository;
  constructor(repository: Repository) {
    this.repository = repository;
  }

  /**
   * It creates a new signer.
   * @param {SmSigner} params - The parameters to pass to the API.
   * @returns The SmSigner object that was created.
   */
  async create(params: Omit<SmSigner, 'id'>): Promise<SmSigner> {
    return this.repository.post<Partial<SmSigner>, SmSigner>('/signers', params);
  }

  /**
   * Get all signers by address and chain id
   * @param {string} address - The address of the signer.
   * @param {ChainId} chainId - The chain ID of the signer.
   * @param options - { page?: number; limit?: number } = { page: 1, limit: 100 }
   * @returns A list of signers.
   */
  async getByAddressAndChainId(
    address: string,
    chainId: ChainId,
    options: { page?: number; limit?: number } = { page: 1, limit: 100 },
  ): Promise<PaginationResponse<SmSigner>> {
    return await this.repository.get<PaginationResponse<SmSigner>>(
      `/signers/by-address?page=${options.page}&limit=${options.limit}&address=${address}&chainId=${chainId}`,
    );
  }
}
