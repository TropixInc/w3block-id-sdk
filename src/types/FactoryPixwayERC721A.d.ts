import { BytesLike } from '@ethersproject/bytes';
import { BigNumberish } from 'ethers';
import { TransactionArgs } from './pixchain';
export class FactoryPixwayERC721A<T> {
  createNTFClone(salt: BytesLike, transactionArgs: TransactionArgs): Promise<T>;

  createPaymentSplitterClone(salt: BytesLike, transactionArgs: TransactionArgs): Promise<T>;

  deployNFT(
    name_: string,
    symbol_: string,
    contractURI_: string,
    baseURI_: string,
    royaltyReceipt_: string,
    royaltyAmount_: BigNumberish,
    contractId_: string,
    transactionArgs: TransactionArgs,
  ): Promise<T>;

  deployNFTWithRoyaltyInitialize(
    name_: string,
    symbol_: string,
    contractURI_: string,
    baseURI_: string,
    payees_: string[],
    shares_: BigNumberish[],
    royaltyAmount_: BigNumberish,
    contractId_: string,
    transactionArgs: TransactionArgs,
  ): Promise<T>;

  deploySplitter(
    payees_: string[],
    shares_: BigNumberish[],
    contractId_: string,
    transactionArgs: TransactionArgs,
  ): Promise<T>;

  getNFTAddress(salt: BytesLike): Promise<string>;

  getSalt(contractId_: string): Promise<string>;

  getSplitterAddress(salt: BytesLike): Promise<string>;

  initialize(_nft: string, _splitter: string, transactionArgs: TransactionArgs): Promise<T>;

  nftTemplate(): Promise<string>;

  owner(): Promise<string>;

  renounceOwnership(transactionArgs: TransactionArgs): Promise<T>;

  setNFT(nft_: string, transactionArgs: TransactionArgs): Promise<T>;

  setSplitter(splitter_: string, transactionArgs: TransactionArgs): Promise<T>;

  splitterTemplate(): Promise<string>;

  transferOwnership(newOwner: string, transactionArgs: TransactionArgs): Promise<T>;
}
