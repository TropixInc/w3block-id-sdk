import { BytesLike } from '@ethersproject/bytes';
import { BigNumberish } from 'ethers';
import { ContractTransactionResponse } from '../interfaces';
import { DeployEvent, OwnershipTransferredEvent } from './events';
import { TransactionArgs } from './pixchain';

export class NFTAndRoyaltySplitterFactory {
  events: {
    'Deploy(address,address)': DeployEvent;
    'OwnershipTransferred(address,address)': OwnershipTransferredEvent;
  };

  createNTFClone(salt: BytesLike, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  createPaymentSplitterClone(salt: BytesLike, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  deployNFTWithRoyaltyInitialize(
    name_: string,
    symbol_: string,
    royaltyAmount_: BigNumberish,
    payees_: string[],
    shares_: BigNumberish[],
    contractURI_: string,
    baseURI_: string,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  deploySplitter(
    payees_: string[],
    shares_: BigNumberish[],
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  deployNFT(
    name_: string,
    symbol_: string,
    royaltyAmount_: BigNumberish,
    royaltyReceipt_: string,
    contractURI_: string,
    baseURI_: string,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  getNFTCloneAddress(salt: BytesLike): Promise<string>;

  getPaymentSplitterCloneAddress(salt: BytesLike): Promise<string>;

  getSalt(
    name_: string,
    symbol_: string,
    royaltyAmount_: BigNumberish,
    payees_: string[],
    shares_: BigNumberish[],
  ): Promise<string>;

  getSaltDeployNFT(
    name_: string,
    symbol_: string,
    royaltyAmount_: BigNumberish,
    royaltyReceipt_: string,
  ): Promise<string>;

  getSaltDeploySplitter(payees_: string[], shares_: BigNumberish[]): Promise<string>;

  initialize(_nft: string, _splitter: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  nftTemplate(): Promise<string>;

  owner(): Promise<string>;

  renounceOwnership(transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  setNFT(nft_: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  setSplitter(splitter_: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  splitterTemplate(transactionArgs: TransactionArgs): Promise<string>;

  transferOwnership(newOwner: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;
}
