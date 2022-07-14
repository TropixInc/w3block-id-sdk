import { BytesLike } from '@ethersproject/bytes';
import { BigNumber, BigNumberish } from 'ethers';
import { ContractTransactionResponse } from '../interfaces';
import {
  ApprovalEvent,
  ApprovalForAllEvent,
  OwnershipTransferredEvent,
  PausedEvent,
  RoleAdminChangedEvent,
  RoleGrantedEvent,
  RoleRevokedEvent,
  RoyaltyEvent,
  SecondarySaleFeesEvent,
  TransferEvent,
  UnpausedEvent,
} from './events';
import { TransactionArgs } from './pixchain';

export class TropixNFT721 {
  events: {
    'Approval(address,address,uint256)': ApprovalEvent;
    'ApprovalForAll(address,address,bool)': ApprovalForAllEvent;
    'OwnershipTransferred(address,address)': OwnershipTransferredEvent;
    'Paused(address)': PausedEvent;
    'RoleAdminChanged(bytes32,bytes32,bytes32)': RoleAdminChangedEvent;
    'RoleGranted(bytes32,address,address)': RoleGrantedEvent;
    'RoleRevoked(bytes32,address,address)': RoleRevokedEvent;
    'Royalty(address,uint256)': RoyaltyEvent;
    'SecondarySaleFees(uint256,address[],uint256[])': SecondarySaleFeesEvent;
    'Transfer(address,address,uint256)': TransferEvent;
    'Unpaused(address)': UnpausedEvent;
  };

  DEFAULT_ADMIN_ROLE(): Promise<string>;

  MINTER_ROLE(): Promise<string>;

  PAUSER_ROLE(): Promise<string>;

  approve(to: string, tokenId: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  auctionContract(): Promise<string>;

  balanceOf(owner: string): Promise<BigNumber>;

  baseURI(): Promise<string>;

  burn(tokenId: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  contractURI(): Promise<string>;

  getApproved(tokenId: BigNumberish): Promise<string>;

  getFeeBps(arg0: BigNumberish): Promise<BigNumber[]>;

  getFeeRecipients(_tokenId: BigNumberish): Promise<string[]>;

  getNextTokenId(): Promise<BigNumber>;

  getRoleAdmin(role: BytesLike): Promise<string>;

  getRoyaltiesAmount(arg0: BigNumberish): Promise<BigNumber>;

  getRoyaltiesReceiver(arg0: BigNumberish): Promise<string>;

  grantRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  hasRole(role: BytesLike, account: string): Promise<boolean>;

  hasRoyalties(arg0: BigNumberish): Promise<boolean>;

  initialize(
    name_: string,
    symbol_: string,
    _receiver: string,
    _royaltyAmount: BigNumberish,
    owner_: string,
    contractURI_: string,
    baseURI_: string,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  isApprovedForAll(owner: string, operator: string): Promise<boolean>;

  mint(to: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  mintWithUri(to: string, uri: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  name(): Promise<string>;

  owner(): Promise<string>;

  ownerOf(tokenId: BigNumberish): Promise<string>;

  pause(transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  paused(): Promise<boolean>;

  renounceOwnership(transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  renounceRole(
    role: BytesLike,
    account: string,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  revokeRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  royaltyInfo(arg0: BigNumberish, value: BigNumberish): Promise<{ receiver: string; royaltyAmount: BigNumber }>;

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

  setAuctionContract(_auctionContract: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  setBaseURI(uri: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  setContractURI(_contractURI: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  setRoyalties(
    recipient: string,
    value: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  setTokenURI(
    tokenId: BigNumberish,
    uri: string,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  supportsInterface(interfaceId: BytesLike): Promise<boolean>;

  symbol(): Promise<string>;

  tokenByIndex(index: BigNumberish): Promise<BigNumber>;

  tokenOfOwnerByIndex(owner: string, index: BigNumberish): Promise<BigNumber>;

  tokenURI(tokenId: BigNumberish): Promise<string>;

  totalSupply(): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  transferOwnership(newOwner: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  unpause(transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;
}
