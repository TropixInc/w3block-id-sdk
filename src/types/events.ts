/* eslint-disable sonarjs/no-duplicate-string */
import { BigNumber } from 'ethers';
import { TypedEvent } from '../interfaces';

export type AuctionBidPlacedEvent = TypedEvent<{
  auctionId: BigNumber;
  bidder: string;
  currentPrice: BigNumber;
  endTime: BigNumber;
}>;

export type AuctionCanceledEvent = TypedEvent<{ auctionId: BigNumber; canceledByCurator: boolean }>;

export type AuctionConfigUpdatedEvent = TypedEvent<{
  minPercentIncrementInBasisPoints: BigNumber;
  duration: BigNumber;
  extensionDuration: BigNumber;
  limitStartTime: BigNumber;
  enableUserToCreateAuction: boolean;
}>;

export type AuctionCreatedEvent = TypedEvent<{
  seller: string;
  nftContract: string;
  tokenId: BigNumber;
  auctionType: number;
  startTime: BigNumber;
  endTime: BigNumber;
  duration: BigNumber;
  extensionDuration: BigNumber;
  startingPrice: BigNumber;
  auctionId: BigNumber;
  fee: BigNumber;
  createdByCurator: boolean;
}>;

export type AuctionFinalizedEvent = TypedEvent<{
  auctionId: BigNumber;
  seller: string;
  bidder: string;
}>;

export type AuctionPausedEvent = TypedEvent<{ auctionId: BigNumber; whoPaused: string }>;

export type AuctionPayInThePrimaryMarketRoyaltyRecipientEvent = TypedEvent<{ auctionId: BigNumber; fee: boolean }>;

export type AuctionResumeEvent = TypedEvent<{ auctionId: BigNumber; whoResume: string }>;

export type AuctionStopEvent = TypedEvent<{
  auctionId: BigNumber;
  seller: string;
  bidder: string;
  nftContract: string;
  tokenId: BigNumber;
}>;

export type AuctionUpdatedEvent = TypedEvent<{
  auctionId: BigNumber;
  auctionType: number;
  currentPrice: BigNumber;
  startTime: BigNumber;
  endTime: BigNumber;
  duration: BigNumber;
  createdByCurator: boolean;
}>;

export type AuctionUpdatedFeeEvent = TypedEvent<{ auctionId: BigNumber; fee: BigNumber }>;

export type MarketFeesUpdatedEvent = TypedEvent<{ primaryFee: BigNumber; secondaryFee: BigNumber }>;

export type RoleAdminChangedEvent = TypedEvent<{
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}>;

export type RoleGrantedEvent = TypedEvent<{ role: string; account: string; sender: string }>;

export type RoleRevokedEvent = TypedEvent<{ role: string; account: string; sender: string }>;

export type RoyaltyPaymentEvent = TypedEvent<{
  nftContract: string;
  tokenId: BigNumber;
  royaltyRecipient: string;
  amount: BigNumber;
}>;

export type WithdrawPendingEvent = TypedEvent<{ payee: string; amount: BigNumber }>;

export type WithdrawalEvent = TypedEvent<{ payee: string; amount: BigNumber }>;

export type AuctionSharesUpdatedEvent = TypedEvent<{
  auctionId: BigNumber;
  payees: string[];
  shares: BigNumber[];
}>;

export type SharePaymentEvent = TypedEvent<{
  nftContract: string;
  tokenId: BigNumber;
  payee: string;
  sale: BigNumber;
  share: BigNumber;
  amount: BigNumber;
}>;

export enum TropixAuctionMarketplaceEventsSignature {
  AuctionBidPlaced = 'AuctionBidPlaced(uint256,address,uint256,uint256)',
  AuctionCanceled = 'AuctionCanceled(uint256,bool)',
  AuctionConfigUpdated = 'AuctionConfigUpdated(uint256,uint256,uint256,uint256,bool)',
  AuctionCreated = 'AuctionCreated(address,address,uint256,uint8,uint256,uint256,uint256,uint256,uint256,uint256,uint256,bool)',
  AuctionFinalized = 'AuctionFinalized(uint256,address,address)',
  AuctionPaused = 'AuctionPaused(uint256,address)',
  AuctionPayInThePrimaryMarketRoyaltyRecipient = 'AuctionPayInThePrimaryMarketRoyaltyRecipient(uint256,bool)',
  AuctionResume = 'AuctionResume(uint256,address)',
  AuctionStop = 'AuctionStop(uint256,address,address,address,uint256)',
  AuctionUpdated = 'AuctionUpdated(uint256,uint8,uint256,uint256,uint256,uint256,bool)',
  AuctionUpdatedFee = 'AuctionUpdatedFee(uint256,uint256)',
  MarketFeesUpdated = 'MarketFeesUpdated(uint256,uint256)',
  RoleAdminChanged = 'RoleAdminChanged(bytes32,bytes32,bytes32)',
  RoleGranted = 'RoleGranted(bytes32,address,address)',
  RoleRevoked = 'RoleRevoked(bytes32,address,address)',
  RoyaltyPayment = 'RoyaltyPayment(address,uint256,address,uint256)',
  WithdrawPending = 'WithdrawPending(address,uint256)',
  Withdrawal = 'Withdrawal(address,uint256)',
  SharePayment = 'SharePayment(address,uint256,address,uint256,uint256,uint256)',
  AuctionSharesUpdated = 'AuctionSharesUpdated(uint256,address[],uint256[])',
}

export type ApprovalEvent = TypedEvent<{
  owner: string;
  approved: string;
  tokenId: BigNumber;
}>;

export type ApprovalForAllEvent = TypedEvent<{
  owner: string;
  operator: string;
  approved: boolean;
}>;

export type OwnershipTransferredEvent = TypedEvent<{ previousOwner: string; newOwner: string }>;

export type PausedEvent = TypedEvent<{ account: string }>;

export type RoyaltyEvent = TypedEvent<{ royaltyRecipient: string; royaltyAmount: BigNumber }>;

export type SecondarySaleFeesEvent = TypedEvent<{
  tokenId: BigNumber;
  recipients: string[];
  bps: BigNumber[];
}>;

export type TransferEvent = TypedEvent<{ from: string; to: string; tokenId: BigNumber }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export enum TropixNFT721EventsSignature {
  Approval = 'Approval(address,address,uint256)',
  ApprovalForAll = 'ApprovalForAll(address,address,bool)',
  OwnershipTransferred = 'OwnershipTransferred(address,address)',
  Paused = 'Paused(address)',
  RoleAdminChanged = 'RoleAdminChanged(bytes32,bytes32,bytes32)',
  RoleGranted = 'RoleGranted(bytes32,address,address)',
  RoleRevoked = 'RoleRevoked(bytes32,address,address)',
  Royalty = 'Royalty(address,uint256)',
  SecondarySaleFees = 'SecondarySaleFees(uint256,address[],uint256[])',
  Transfer = 'Transfer(address,address,uint256)',
  Unpaused = 'Unpaused(address)',
}

// TropixNFTAndRoyaltySplitter

export type DeployEvent = TypedEvent<{ nft: string; spliter: string }>;

export type DeployNFTEvent = TypedEvent<{ nft: string }>;

export type DeploySplitterEvent = TypedEvent<{ splitter: string }>;

export enum TropixNFTAndRoyaltySplitterEventsSignature {
  Deploy = 'Deploy(address,address)',
  DeployNFT = 'DeployNFT(address)',
  DeploySplitter = 'DeploySplitter(address)',
  OwnershipTransferred = 'OwnershipTransferred(address,address)',
}

// TropixDirectPurchase

export type FeesUpdatedEvent = TypedEvent<{ fee: BigNumber }>;

export type OrderCanceledEvent = TypedEvent<{ orderId: BigNumber; whoCanceled: string }>;

export type OrderCreatedEvent = TypedEvent<{
  orderId: BigNumber;
  nftContract: string;
  tokenId: BigNumber;
  currentPrice: BigNumber;
  expirationTime: BigNumber;
  createdAt: BigNumber;
}>;

export type OrderCurrentPriceUpdatedEvent = TypedEvent<{ orderId: BigNumber; currentPrice: BigNumber }>;

export type OrderExpirationTimeUpdatedEvent = TypedEvent<{ orderId: BigNumber; expirationTime: BigNumber }>;

export type OrderPurchasedEvent = TypedEvent<{
  orderId: BigNumber;
  nftContract: string;
  tokenId: BigNumber;
  seller: string;
  payee: string;
  amount: BigNumber;
}>;

export type OrderSharesUpdatedEvent = TypedEvent<{
  orderId: BigNumber;
  payees: string[];
  shares: BigNumber[];
}>;

export type UpdatedExpirationTimeEvent = TypedEvent<{
  minimumExpirationTime: BigNumber;
  maximumExpirationTime: BigNumber;
}>;

export enum TropixDirectPurchaseEventsSignature {
  FeesUpdated = 'FeesUpdated(uint256)',
  OrderCanceled = 'OrderCanceled(uint256,address)',
  OrderCreated = 'OrderCreated(uint256,address,uint256,uint256,uint256,uint256)',
  OrderCurrentPriceUpdated = 'OrderCurrentPriceUpdated(uint256,uint256)',
  OrderExpirationTimeUpdated = 'OrderExpirationTimeUpdated(uint256,uint256)',
  OrderPurchased = 'OrderPurchased(uint256,address,uint256,address,address,uint256)',
  OrderSharesUpdated = 'OrderSharesUpdated(uint256,address[],uint256[])',
  OwnershipTransferred = 'OwnershipTransferred(address,address)',
  RoleAdminChanged = 'RoleAdminChanged(bytes32,bytes32,bytes32)',
  RoleGranted = 'RoleGranted(bytes32,address,address)',
  RoleRevoked = 'RoleRevoked(bytes32,address,address)',
  RoyaltyPayment = 'RoyaltyPayment(address,uint256,address,uint256)',
  SharePayment = 'SharePayment(address,uint256,address,uint256,uint256,uint256)',
  UpdatedExpirationTime = 'UpdatedExpirationTime(uint256,uint256)',
  WithdrawPending = 'WithdrawPending(address,uint256)',
  Withdrawal = 'Withdrawal(address,uint256)',
}

//  TransferManager

export enum TransferManagerEventsSignature {
  OwnershipTransferred = 'OwnershipTransferred(address,address)',
  RoleAdminChanged = 'RoleAdminChanged(bytes32,bytes32,bytes32)',
  RoleGranted = 'RoleGranted(bytes32,address,address)',
  RoleRevoked = 'RoleRevoked(bytes32,address,address)',
}

// EventixERC721A

export enum EventixERC721AEventsSignature {
  Approval = 'Approval(address,address,uint256)',
  ApprovalForAll = 'ApprovalForAll(address,address,bool)',
  RoleAdminChanged = 'RoleAdminChanged(bytes32,bytes32,bytes32)',
  RoleGranted = 'RoleGranted(bytes32,address,address)',
  RoleRevoked = 'RoleRevoked(bytes32,address,address)',
  Transfer = 'Transfer(address,address,uint256)',
}

// Pixway
export enum PixwayERC721AEventsSignature {
  Approval = 'Approval(address,address,uint256)',
  ApprovalForAll = 'ApprovalForAll(address,address,bool)',
  OwnershipTransferred = 'OwnershipTransferred(address,address)',
  Paused = 'Paused(address)',
  RoleAdminChanged = 'RoleAdminChanged(bytes32,bytes32,bytes32)',
  RoleGranted = 'RoleGranted(bytes32,address,address)',
  RoleRevoked = 'RoleRevoked(bytes32,address,address)',
  Royalty = 'Royalty(address,uint256)',
  SecondarySaleFees = 'SecondarySaleFees(uint256,address[],uint256[])',
  Transfer = 'Transfer(address,address,uint256)',
  Unpaused = 'Unpaused(address)',
}

export enum FactoryPixwayERC721AEventsSignature {
  Deploy = 'Deploy(address,address)',
  DeployNFT = 'DeployNFT(address)',
  DeploySplitter = 'DeploySplitter(address)',
  OwnershipTransferred = 'OwnershipTransferred(address,address)',
}
