import { BigNumber, BigNumberish } from 'ethers';
import { ContractTransactionResponse } from '../interfaces';
import { TransactionArgs } from './pixchain';

export class TropixPaymentSplitter {
  'balance(address,address)'(token: string, account: string): Promise<BigNumber>;

  'balance(address)'(account: string): Promise<BigNumber>;

  initialize(
    payees: string[],
    shares_: BigNumberish[],
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  payee(index: BigNumberish): Promise<string>;

  'release(address)'(account: string, transactionArgs: TransactionArgs): Promise<ContractTransactionResponse>;

  'release(address,address)'(
    token: string,
    account: string,
    transactionArgs: TransactionArgs,
  ): Promise<ContractTransactionResponse>;

  'released(address,address)'(token: string, account: string): Promise<BigNumber>;

  'released(address)'(account: string): Promise<BigNumber>;

  shares(account: string): Promise<BigNumber>;

  'totalReleased(address)'(token: string): Promise<BigNumber>;

  'totalReleased()'(): Promise<BigNumber>;

  totalShares(): Promise<BigNumber>;
}
