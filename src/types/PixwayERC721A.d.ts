import { BytesLike } from '@ethersproject/bytes';
import { BigNumber, BigNumberish } from 'ethers';
import { TransactionArgs } from './pixchain';

export class PixwayERC721A<T> {
  BURNER_ROLE(): Promise<string>;

  DEFAULT_ADMIN_ROLE(): Promise<string>;

  MINTER_ROLE(): Promise<string>;

  MOVER_ROLE(): Promise<string>;

  PAUSER_ROLE(): Promise<string>;

  approve(to: string, tokenId: BigNumberish, transactionArgs: TransactionArgs): Promise<T>;

  balanceOf(owner: string): Promise<BigNumber>;

  baseURI(): Promise<string>;

  burn(tokenId: BigNumberish, transactionArgs: TransactionArgs): Promise<T>;

  contractURI(): Promise<string>;

  currentIndex(): Promise<BigNumber>;

  getApproved(tokenId: BigNumberish): Promise<string>;

  getBurned(): Promise<boolean>;

  getFeeBps(arg0: BigNumberish): Promise<BigNumber[]>;

  getFeeRecipients(_tokenId: BigNumberish): Promise<string[]>;

  getRoleAdmin(role: BytesLike): Promise<string>;

  getRoyaltiesAmount(arg0: BigNumberish): Promise<BigNumber>;

  getRoyaltiesReceiver(arg0: BigNumberish): Promise<string>;

  grantRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<T>;

  hasRole(role: BytesLike, account: string): Promise<boolean>;

  hasRoyalties(arg0: BigNumberish): Promise<boolean>;

  initialize(
    name_: string,
    symbol_: string,
    contractURI_: string,
    baseURI_: string,
    _receiver: string,
    _royaltyAmount: BigNumberish,
    owner_: string,
    transactionArgs: TransactionArgs,
  ): Promise<T>;

  isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

  mint(_target: string, _quantity: BigNumberish, transactionArgs: TransactionArgs): Promise<T>;

  name(): Promise<string>;

  owner(): Promise<string>;

  ownerOf(tokenId: BigNumberish): Promise<string>;

  pause(transactionArgs: TransactionArgs): Promise<T>;

  paused(): Promise<boolean>;

  renounceOwnership(transactionArgs: TransactionArgs): Promise<T>;

  renounceRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<T>;

  revokeRole(role: BytesLike, account: string, transactionArgs: TransactionArgs): Promise<T>;

  royaltyInfo(arg0: BigNumberish, value: BigNumberish): Promise<{ receiver: string; royaltyAmount: BigNumber }>;

  safeMint(_target: string, _quantity: BigNumberish, transactionArgs: TransactionArgs): Promise<T>;

  'safeTransferFrom(address,address,uint256)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    transactionArgs: TransactionArgs,
  ): Promise<T>;

  'safeTransferFrom(address,address,uint256,bytes)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    transactionArgs: TransactionArgs,
  ): Promise<T>;

  setApprovalForAll(operator: string, approved: boolean, transactionArgs: TransactionArgs): Promise<T>;

  setBaseURI(uri: string, transactionArgs: TransactionArgs): Promise<T>;

  setBurned(burned: boolean, transactionArgs: TransactionArgs): Promise<T>;

  setContractURI(_contractURI: string, transactionArgs: TransactionArgs): Promise<T>;

  setRoyalties(recipient: string, value: BigNumberish, transactionArgs: TransactionArgs): Promise<T>;

  setTokenURI(tokenId: BigNumberish, uri: string, transactionArgs: TransactionArgs): Promise<T>;

  supportsInterface(interfaceId: BytesLike): Promise<boolean>;

  symbol(): Promise<string>;

  tokenURI(tokenId: BigNumberish): Promise<string>;

  totalSupply(): Promise<BigNumber>;

  transferFrom(from: string, to: string, tokenId: BigNumberish, transactionArgs: TransactionArgs): Promise<T>;

  transferOwnership(newOwner: string, transactionArgs: TransactionArgs): Promise<T>;

  unpause(transactionArgs: TransactionArgs): Promise<T>;
}
