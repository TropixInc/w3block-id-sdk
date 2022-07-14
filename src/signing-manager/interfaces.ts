import { BlockchainTypeEnum } from '..';

export enum SmSignerTypes {
  METAMASK = 'metamask',
  VAULT = 'vault',
}

export interface SmSigner {
  id: string;
  type: SmSignerTypes;
  address: string;
  chainId: number;
  data: Record<string, any>;
}

export enum SmTransactionStatus {
  PENDING = 'pending',
  SIGNED = 'signed',
  EXPIRED = 'expired',
  ABORTED = 'aborted',
}

export interface SmTransaction {
  id: string;
  status: SmTransactionStatus;
  address: string;
  chainId: number;
  data: any;
  signer: SmSigner;
  txHash?: string;
  externalId?: string;
  source: string;
  signedAt?: Date;
  expiredAt?: Date;
  expireAt?: Date;
  signerType: SmSignerTypes;
  estimatedGas?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type Meta = Record<string, any>;

export interface NetworkTransactionArgs {
  name: string;
  type: string;
  value: any;
  index: number;
}

export interface NetworkTransactionInput {
  type: string;
  name: string;
}
export interface ABI {
  type: string;
  name: string;
  constant: boolean;
  payable: boolean;
  inputs: NetworkTransactionInput[];
  outputs: [];
}

export interface DeployRequest {
  methodName: string;
  argumentValues: any[];
  signature: string | string[];
  type: BlockchainTypeEnum.DEPLOYMENT;
  bytecode: string;
  estimatedGas?: string;
}

export interface TransactionRequest {
  methodName: string;
  arguments?: NetworkTransactionArgs[];
  argumentValues: any[];
  outputs?: any[];
  abi?: ABI;
  signature?: string | string[];
  type: BlockchainTypeEnum;
  contractAddress?: string;
  estimatedGas?: string;
  ether?: string;
}

export interface TransferCallable {
  to: string;
  type: BlockchainTypeEnum.TRANSFER;
  estimatedGas?: string;
  ether: string;
  methodName?: string; //only to be compatible with other types
}

export type SMTransactionRequest = DeployRequest | TransactionRequest | TransferCallable;
