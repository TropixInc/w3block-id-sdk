import { BytesLike } from '@ethersproject/bytes';
import { BigNumber, BigNumberish, PayableOverrides } from 'ethers';
import { ContractTransactionResponse } from '../interfaces';
import { TransactionArgs } from './pixchain';

export class EventixERC721A {
  ADMIN_ROLE(): Promise<string>;

  DEFAULT_ADMIN_ROLE(): Promise<string>;

  MINTER_ROLE(): Promise<string>;

  approve(to: string, tokenId: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  balanceOf(owner: string): Promise<BigNumber>;

  baseURI(): Promise<string>;

  contractURI(): Promise<string>;

  getApproved(tokenId: BigNumberish): Promise<string>;

  getRoleAdmin(role: BytesLike): Promise<string>;

  grantRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  hasRole(role: BytesLike, account: string): Promise<boolean>;

  initialize(transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  isApprovedForAll(owner: string, operator: string): Promise<boolean>;

  mint(
    _target: string,
    _quantity: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransactionResponse>;

  name(): Promise<string>;

  ownerOf(tokenId: BigNumberish): Promise<string>;

  renounceRole(
    role: BytesLike,
    account: string,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  revokeRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  'safeTransferFrom(address,address,uint256)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  'safeTransferFrom(address,address,uint256,bytes)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  setBaseURI(uri: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  supportsInterface(interfaceId: BytesLike): Promise<boolean>;

  symbol(): Promise<string>;

  tokenURI(tokenId: BigNumberish): Promise<string>;

  totalSupply(): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;
}
