import { BytesLike } from '@ethersproject/bytes';
import { BigNumber, BigNumberish } from 'ethers';
import { ContractTransactionResponse } from '../interfaces';
import {
  AuctionBidPlacedEvent,
  AuctionCanceledEvent,
  AuctionConfigUpdatedEvent,
  AuctionCreatedEvent,
  AuctionFinalizedEvent,
  AuctionPausedEvent,
  AuctionPayInThePrimaryMarketRoyaltyRecipientEvent,
  AuctionResumeEvent,
  AuctionSharesUpdatedEvent,
  AuctionStopEvent,
  AuctionUpdatedEvent,
  AuctionUpdatedFeeEvent,
  MarketFeesUpdatedEvent,
  RoleAdminChangedEvent,
  RoleGrantedEvent,
  RoleRevokedEvent,
  RoyaltyPaymentEvent,
  SharePaymentEvent,
  WithdrawalEvent,
  WithdrawPendingEvent,
} from './events';
import { TransactionArgs } from './pixchain';

export class TropixAuctionMarketplace {
  events: {
    'AuctionBidPlaced(uint256,address,uint256,uint256)': AuctionBidPlacedEvent;
    'AuctionCanceled(uint256,bool)': AuctionCanceledEvent;
    'AuctionConfigUpdated(uint256,uint256,uint256,uint256,bool)': AuctionConfigUpdatedEvent;
    'AuctionCreated(address,address,uint256,uint8,uint256,uint256,uint256,uint256,uint256,uint256,uint256,bool)': AuctionCreatedEvent;
    'AuctionFinalized(uint256,address,address)': AuctionFinalizedEvent;
    'AuctionPaused(uint256,address)': AuctionPausedEvent;
    'AuctionPayInThePrimaryMarketRoyaltyRecipient(uint256,bool)': AuctionPayInThePrimaryMarketRoyaltyRecipientEvent;
    'AuctionResume(uint256,address)': AuctionResumeEvent;
    'AuctionSharesUpdated(uint256,address[],uint256[])': AuctionSharesUpdatedEvent;
    'AuctionStop(uint256,address,address,address,uint256)': AuctionStopEvent;
    'AuctionUpdated(uint256,uint8,uint256,uint256,uint256,uint256,bool)': AuctionUpdatedEvent;
    'AuctionUpdatedFee(uint256,uint256)': AuctionUpdatedFeeEvent;
    'MarketFeesUpdated(uint256,uint256)': MarketFeesUpdatedEvent;
    'RoleAdminChanged(bytes32,bytes32,bytes32)': RoleAdminChangedEvent;
    'RoleGranted(bytes32,address,address)': RoleGrantedEvent;
    'RoleRevoked(bytes32,address,address)': RoleRevokedEvent;
    'RoyaltyPayment(address,uint256,address,uint256)': RoyaltyPaymentEvent;
    'SharePayment(address,uint256,address,uint256,uint256,uint256)': SharePaymentEvent;
    'WithdrawPending(address,uint256)': WithdrawPendingEvent;
    'Withdrawal(address,uint256)': WithdrawalEvent;
  };

  CURATOR_ROLE(): Promise<string>;

  DEFAULT_ADMIN_ROLE(): Promise<string>;

  OPERATOR_ROLE(): Promise<string>;

  PAUSER_ROLE(): Promise<string>;

  WITHDRAW_ROLE(): Promise<string>;

  adminUpdateConfig(
    duration: BigNumberish,
    extensionDuration: BigNumberish,
    minPercentIncrementInBasisPoints: BigNumberish,
    limitStartTime: BigNumberish,
    primaryFee: BigNumberish,
    secondaryFee: BigNumberish,
    enableUserToCreateAuction: boolean,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  auctionParamsAreValid(
    auctionType: BigNumberish,
    startingPrice: BigNumberish,
    duration: BigNumberish,
    startTime: BigNumberish,
    endTime: BigNumberish,
  ): Promise<{ status: boolean; message: string }>;

  auctionsCreatedByCurator(arg0: BigNumberish): Promise<string>;

  auctionsPaused(arg0: BigNumberish): Promise<string>;

  canCancelAuction(auctionId: BigNumberish, requester: string): Promise<{ status: boolean; message: string }>;

  canCreateAuction(auction: {
    seller: string;
    nftContract: string;
    tokenId: BigNumberish;
    startingPrice: BigNumberish;
    auctionType: BigNumberish;
    startTime: BigNumberish;
    endTime: BigNumberish;
    duration: BigNumberish;
    payInThePrimaryMarketRoyaltyRecipient: boolean;
  }): Promise<{ status: boolean; message: string }>;

  canFinalizeAuction(auctionId: BigNumberish): Promise<{ status: boolean; message: string }>;

  canPlaceBid(
    auctionId: BigNumberish,
    bidder: string,
    amount: BigNumberish,
  ): Promise<{ status: boolean; message: string }>;

  canUpdateAuction(
    params: {
      auctionId: BigNumberish;
      startingPrice: BigNumberish;
      auctionType: BigNumberish;
      startTime: BigNumberish;
      endTime: BigNumberish;
      duration: BigNumberish;
      payInThePrimaryMarketRoyaltyRecipient: boolean;
    },
    requester: string,
  ): Promise<{ status: boolean; message: string }>;

  cancelAuction(auctionId: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  cancelAuctionByCurator(
    auctionId: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  createAuction(
    params: {
      nftContract: string;
      tokenId: BigNumberish;
      startingPrice: BigNumberish;
      auctionType: BigNumberish;
      startTime: BigNumberish;
      endTime: BigNumberish;
      duration: BigNumberish;
      payInThePrimaryMarketRoyaltyRecipient: boolean;
    },
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  createAuctionByCurator(
    params: {
      nftContract: string;
      tokenId: BigNumberish;
      startingPrice: BigNumberish;
      auctionType: BigNumberish;
      startTime: BigNumberish;
      endTime: BigNumberish;
      duration: BigNumberish;
      payInThePrimaryMarketRoyaltyRecipient: boolean;
    },
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  createAuctionFeeCustomByCurator(
    params: {
      nftContract: string;
      tokenId: BigNumberish;
      startingPrice: BigNumberish;
      auctionType: BigNumberish;
      startTime: BigNumberish;
      endTime: BigNumberish;
      duration: BigNumberish;
      payInThePrimaryMarketRoyaltyRecipient: boolean;
    },
    fee: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  escrowOf(payee: string): Promise<BigNumber>;

  escrowOfWithFee(payee: string): Promise<BigNumber>;

  finalizeAuction(auctionId: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  getAuction(auctionId: BigNumberish): Promise<{
    nftContract: string;
    tokenId: BigNumber;
    seller: string;
    auctionType: number;
    startTime: BigNumber;
    endTime: BigNumber;
    duration: BigNumber;
    extensionDuration: BigNumber;
    bidder: string;
    currentPrice: BigNumber;
    fee: BigNumber;
  }>;

  getAuctionByContractAndToken(nftContract: string, tokenId: BigNumberish): Promise<BigNumber>;

  getAuctionShares(auctionId: BigNumberish): Promise<{ payees: string[]; shares: BigNumber[] }>;

  getAuctionTypeStartOnBid(): Promise<number>;

  getAuctionTypeStartOnTime(): Promise<number>;

  getConfiguration(): Promise<{
    duration: BigNumber;
    extensionDuration: BigNumber;
    minPercentIncrementInBasisPoints: BigNumber;
    limitStartTime: BigNumber;
    enableUserToCreateAuction: boolean;
  }>;

  getFee(nftContract: string, tokenId: BigNumberish): Promise<BigNumber>;

  getFeeConfig(): Promise<{ primaryFee: BigNumber; secondaryFee: BigNumber }>;

  getIsPrimary(nftContract: string, tokenId: BigNumberish): Promise<boolean>;

  getMinBidAmount(auctionId: BigNumberish): Promise<BigNumber>;

  getRoleAdmin(role: BytesLike): Promise<string>;

  getRoyaltyInfo(
    nftContract: string,
    tokenId: BigNumberish,
    amount: BigNumberish,
  ): Promise<{ receiver: string; royaltyAmount: BigNumber }>;

  getTreasury(): Promise<string>;

  grantRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  hasRole(role: BytesLike, account: string): Promise<boolean>;

  initialize(_treasury: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  isApproved(nftContract: string, tokenId: BigNumberish): Promise<boolean>;

  isStartTimeValid(startTime: BigNumberish): Promise<boolean>;

  pauseAuction(auctionId: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  payInThePrimaryMarketRoyaltyRecipient(arg0: BigNumberish): Promise<boolean>;

  placeBid(auctionId: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  renounceRole(
    role: BytesLike,
    account: string,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  resumeAuction(auctionId: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  revokeRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  setTreasury(_treasury: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  setWithdrawFee(_withdrawFee: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  stopAuction(auctionId: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  supportsInterface(interfaceId: BytesLike): Promise<boolean>;

  updateAuction(
    params: {
      auctionId: BigNumberish;
      startingPrice: BigNumberish;
      auctionType: BigNumberish;
      startTime: BigNumberish;
      endTime: BigNumberish;
      duration: BigNumberish;
      payInThePrimaryMarketRoyaltyRecipient: boolean;
    },
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  updateAuctionByCurator(
    params: {
      auctionId: BigNumberish;
      startingPrice: BigNumberish;
      auctionType: BigNumberish;
      startTime: BigNumberish;
      endTime: BigNumberish;
      duration: BigNumberish;
      payInThePrimaryMarketRoyaltyRecipient: boolean;
    },
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  updateAuctionConfiguration(
    duration: BigNumberish,
    extensionDuration: BigNumberish,
    minPercentIncrementInBasisPoints: BigNumberish,
    limitStartTime: BigNumberish,
    enableUserToCreateAuction: boolean,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  updateAuctionFeeByCurator(
    auctionId: BigNumberish,
    fee: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  updateAuctionSharesByCurator(
    auctionId: BigNumberish,
    payees: string[],
    shares: BigNumberish[],
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  updateDuration(duration: BigNumberish, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  updateEnableUserToCreateAuction(
    enableUserToCreateAuction: boolean,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  updateExtensionDuration(
    extensionDuration: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  updateLimitStartTime(
    limitStartTime: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  updateMarketFees(
    primaryFee: BigNumberish,
    secondaryFee: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  updateMinPercentIncrementInBasisPoints(
    minPercentIncrementInBasisPoints: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  'withdraw()'(transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  'withdraw(address)'(payee: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  withdrawFee(): Promise<BigNumber>;

  withdrawWithFee(payee: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;
}
