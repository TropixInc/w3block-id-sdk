import { ChainId } from './enums';

export interface ContractTransactionResponse {
  transactionId: string;
  status: TransactionStatus;
  message?: string;
}
export interface ContractEstimateGasResponse {
  totalGas: number;
  totalGasPrice: {
    safe: string;
    proposed: string;
    fast: string;
  };
}
export interface ContractDeployResponse extends ContractTransactionResponse {
  contractDeploymentId: string;
}

export type TransferTransactionResponse = ContractTransactionResponse;

export enum ClientType {
  INTEGRATION = 'integration',
  APPLICATION = 'application',
  ADMINISTRATOR = 'administrator',
}
export enum TransactionStatus {
  SENT = 'sent',
  FAILED = 'failed',
  SUCCESS = 'success',
}

export enum TransactionReceiptStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAIL = 'fail',
  DROPPED = 'dropped',
}

export type TransactionReasons = Record<string, unknown> | Record<string, unknown>[];
export interface TransactionPublic {
  id: string;
  hash?: string;
  nonce?: string;
  confirmations: number;
  checks: number;
  expiredAt?: Date;
  lastCheck?: Date;
  status: TransactionStatus;
  receiptStatus?: TransactionReceiptStatus;
  reasons: TransactionReasons;
  from?: string;
}

export enum BlockchainTypeEnum {
  CALL = 'call',
  TRANSACTION = 'transaction',
  DEPLOYMENT = 'deployment',
  TRANSFER = 'transfer',
}

export type IContractMethods = {
  methodName: string;
  type: BlockchainTypeEnum;
};

export type Environment = 'development' | 'production' | 'staging';
export interface PixChanProps extends RepositoryProps {
  signatureKey: string;
}

export interface SigningManagerProps extends RepositoryProps {
  endpoint: string;
}

export interface VaultProps extends RepositoryProps {
  endpoint: string;
}

export interface RepositoryProps {
  apiKey: string;
  environment: Environment;
  endpoint?: string;
}

export interface DeployArgs {
  contractSourceId: string;
  chainId: number;
  from: string;
  argumentValues: unknown[];
}

export interface ContractPublic {
  id: string;
  description: string;
  uniqueName: string;
  lastContractSourceId?: string;
  upgradeable: boolean;
}

export interface DeploymentPublic {
  id: string;
  ownerWallet: string;
  version: string;
  chainId: number;
  standard: string;
  uniqueName: string;
  upgradeable: boolean;
  address?: string;
}

export interface PaginationMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
export interface PaginationResponse<T = unknown> {
  items: T[];
  meta: PaginationMeta;
}

export interface PaginationDTO {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  orderBy?: OrderByEnum;
}

export enum OrderByEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface GetContractsDeploymentByOwnerDto extends PaginationDTO {
  address: string;
  chainId: number;
  uniqueName?: string;
  default?: boolean;
}
export interface GetContractsDeploymentByAddressDto {
  address: string;
  chainId: number;
}
export type PayloadWebhook = string | Record<string, unknown> | Record<string, unknown>[];

export interface EventNotify {
  transactionIndex: number;
  blockNumber: number;
  transactionHash: string;
  address: string;
  topics: string[];
  data: string;
  logIndex: number;
  blockHash: string;
  chainId: number;
  timestamp: number;
  name: string;
  signature: string;
  topic: string;
  args: EventArgs;
  transactionId?: string;
}

export type EventArgs = Record<string, any>;

export interface EventSubscription {
  id: string;
  address: string[];
  signature: string;
  event: string;
  topic: string;
}
export interface TypedEvent<T = EventArgs> extends EventNotify {
  args: T;
}

export interface ClientProfile {
  id: string;
  description: string;
  active: boolean;
  type: ClientType;
  webhookTransactionURL?: string;
  webhookEventURL?: string;
}

export interface BlockchainWithSignatureDto {
  inputs: any[];
  methodName: string;
  signature: string;
  address: string;
  chainId: ChainId;
}

export interface ContractDeploymentDto {
  address: string;
  ownerWallet: string;
  chainId: ChainId;
  contractSourceId: string;
  default: boolean;
}

export interface EventListenerDto {
  event: string;
  notify: EventListenerNotify;
  chainId: ChainId;
  address: string;
}

export enum EventListenerNotify {
  WEBHOOK = 'webhook',
  QUEUE = 'queue',
}

export interface ClientDto {
  id?: string;
  description: string;
  webhookTransactionURL?: string;
  webhookEventURL?: string;
  active?: boolean;
  type: ClientType;
}

export interface Client {
  id: string;
  description: string;
  apiKey: string;
  signatureKey: string;
  active: boolean;
  type: ClientType;
  webhookTransactionURL: string;
}
