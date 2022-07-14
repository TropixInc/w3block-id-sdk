import { BytesLike } from '@ethersproject/bytes';
import { BigNumber, BigNumberish } from 'ethers';
import { ContractTransactionResponse } from '../interfaces';
import { TransactionArgs } from './pixchain';

export class TropixDirectPurchase {
  CURATOR_ROLE(): Promise<string>;

  DEFAULT_ADMIN_ROLE(): Promise<string>;

  buyNow(orderId: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  canBuyNow(orderId: BigNumberish, buyer: string, amount: BigNumberish): Promise<{ status: boolean; message: string }>;

  canCancelOrder(orderId: BigNumberish, requester: string): Promise<{ status: boolean; message: string }>;

  canCreateOrder(order: {
    nftContract: string;
    currentPrice: BigNumberish;
    tokenId: BigNumberish;
    expirationTime: BigNumberish;
  }): Promise<{ status: boolean; message: string }>;

  canUpdateOrderCurrentPrice(
    orderId: BigNumberish,
    newPrice: BigNumberish,
    requester: string,
  ): Promise<{ status: boolean; message: string }>;

  canUpdateOrderExpirationTime(
    orderId: BigNumberish,
    expirationTimeExtension: BigNumberish,
    requester: string,
  ): Promise<{ status: boolean; message: string }>;

  canUpdateShares(orderShares: {
    payees: string[];
    shares: BigNumberish[];
  }): Promise<{ status: boolean; message: string }>;

  cancelOrder(orderId: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  createOrder(
    order: {
      nftContract: string;
      currentPrice: BigNumberish;
      tokenId: BigNumberish;
      expirationTime: BigNumberish;
    },
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  createOrderByCurator(
    order: {
      nftContract: string;
      currentPrice: BigNumberish;
      tokenId: BigNumberish;
      expirationTime: BigNumberish;
    },
    orderShares: { payees: string[]; shares: BigNumberish[] },
    customFee: BigNumberish,
    transferRoyalty: boolean,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  escrowOf(payee: string): Promise<BigNumber>;

  escrowOfWithFee(payee: string, gasPrice: BigNumberish): Promise<BigNumber>;

  fee(): Promise<BigNumber>;

  getOrder(orderId: BigNumberish): Promise<{
    order: {
      nftContract: string;
      currentPrice: BigNumber;
      tokenId: BigNumber;
      expirationTime: BigNumber;
    };
    marketFee: BigNumber;
    orderShares: {
      payees: string[];
      shares: BigNumber[];
    };
    originalOwner: string;
    transferRoyalty: boolean;
    checkpoint: BigNumber;
  }>;

  getOrderByContractAndToken(nftContract: string, tokenId: BigNumberish): Promise<BigNumber>;

  getRoleAdmin(role: BytesLike): Promise<string>;

  getRoyaltyInfo(
    nftContract: string,
    tokenId: BigNumberish,
    amount: BigNumberish,
  ): Promise<{ receiver: string; royaltyAmount: BigNumber }>;

  grantRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  hasRole(role: BytesLike, account: string): Promise<boolean>;

  initialize(
    _treasury: string,
    _transferManager: string,
    _fee: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  isApproved(nftContract: string, tokenId: BigNumberish): Promise<boolean>;

  maximumExpirationTime(): Promise<BigNumber>;

  minimumExpirationTime(): Promise<BigNumber>;

  owner(): Promise<string>;

  renounceOwnership(transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  renounceRole(
    role: BytesLike,
    account: string,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  revokeRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  setTransferManager(_transferManager: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  setTreasury(_treasury: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  setWithdrawFee(_withdrawFee: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  supportsInterface(interfaceId: BytesLike): Promise<boolean>;

  transferManager(): Promise<string>;

  transferOwnership(newOwner: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  treasury(): Promise<string>;

  updateFees(_fee: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  updateMiniumAndMaximumExpirationTime(
    _minimumExpirationTime: BigNumberish,
    _maximumExpirationTime: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  updateOrderCurrentPrice(
    orderId: BigNumberish,
    newPrice: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  updateOrderExpirationTime(
    orderId: BigNumberish,
    expirationTimeExtension: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  'withdraw()'(transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  'withdraw(address)'(payee: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  withdrawFee(): Promise<BigNumber>;

  withdrawWithFee(payee: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;
}
