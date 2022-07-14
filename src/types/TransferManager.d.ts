import { BytesLike } from '@ethersproject/bytes';
import { BigNumberish, ContractTransaction } from 'ethers';
import { TransactionArgs } from './pixchain';

export class TransferManager {
  DEFAULT_ADMIN_ROLE(): Promise<string>;

  getRoleAdmin(role: BytesLike): Promise<string>;

  grantRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<ContractTransaction>;

  hasRole(role: BytesLike, account: string): Promise<boolean>;

  initialize(transactionArgs: TransactionArgs): Promise<ContractTransaction>;

  owner(): Promise<string>;

  renounceOwnership(transactionArgs: TransactionArgs): Promise<ContractTransaction>;

  renounceRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<ContractTransaction>;

  revokeRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<ContractTransaction>;

  supportsInterface(interfaceId: BytesLike): Promise<boolean>;

  transferFromERC1155(
    collection: string,
    from: string,
    to: string,
    tokenId: BigNumberish,
    amount: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransaction>;

  transferFromERC721(
    collection: string,
    from: string,
    to: string,
    tokenId: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransaction>;

  transferOwnership(newOwner: string, transactionArgs: TransactionArgs): Promise<ContractTransaction>;
}
