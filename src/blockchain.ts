/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ChainId, EtherUnitsEnum } from './enums';
import { BlockchainWithSignatureDto, TransferTransactionResponse } from './interfaces';
import { BigNumberish } from 'ethers';
import Repository from './repository';
import { formatUnits } from '.';

export interface GasPrices {
  fastest: string;
  fast: string;
  normal: string;
  slow: string;
  slowest: string;
}

export interface GasInfo {
  chainId: ChainId;
  unit: EtherUnitsEnum;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  gasPrice: string;
  gasPrices: GasPrices;
}

export interface TransactionCount {
  count: number;
  address: string;
  chainId: ChainId;
}

export interface GasPrice {
  type: string;
  hex: string;
}

export interface Balance {
  currency: string;
  balance: string;
}

export type MethodsGasByChain = Record<string, ChainMethodsGas>;

export type ChainMethodsGas = Record<string, MethodsGasPrice | string>;

export type MethodsGasPrice = Record<string, Record<string, string | null>>;
export interface TransactionCosts {
  name: string;
  safe: number;
  proposed: number;
  fast: number;
}
export class Blockchain {
  private repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  public async getTransactionCount(address: string, chainId: ChainId): Promise<TransactionCount> {
    return await this.repository.get(
      `/blockchain/transaction-count`,
      { chainId, address },
      'Transaction count not exist',
    );
  }

  public async getGasInfo(chainId: ChainId, unit?: EtherUnitsEnum): Promise<GasInfo> {
    return await this.repository.get(`/blockchain/gas-info`, { chainId, unit }, 'Failed to get gas info');
  }

  public async getBalance(address: string, chainId: ChainId): Promise<Balance> {
    return await this.repository.get(`/blockchain/balance`, { chainId, address }, 'Failed to get balance');
  }

  public async sendSigned(signedTx: string, chainId: ChainId, wait?: number): Promise<{ txHash: string }> {
    return await this.repository.post(
      `/blockchain/send-signed`,
      { chainId, signedTx, wait },
      'Failed to send signed transaction',
    );
  }

  public async callWithSignature<T>(dto: BlockchainWithSignatureDto): Promise<T> {
    return await this.repository.post(`/blockchain/call-with-signature`, dto, 'Failed to call method on blockchain');
  }

  public async transfer(
    from: string,
    to: string,
    chainId: ChainId,
    amount: BigNumberish,
  ): Promise<TransferTransactionResponse> {
    return await this.repository.post(
      `/blockchain/transfer`,
      { from, to, chainId, ether: amount.toString() },
      'Failed to create transfer signing request',
    );
  }
  public async getGas() {
    const methodsGasByChain = {} as MethodsGasByChain;

    try {
      const data = await this.repository.get(`/blockchain/gas-cost`);
      // goes through each chain available
      for (const item in data) {
        methodsGasByChain[item] = {} as ChainMethodsGas;
        const methodsPrices = {} as MethodsGasPrice;
        let currency = 'NONE';

        currency = data[item].currency;
        // goes through each trasaction available for the current chain
        data[item].methodsPrices.forEach((method: TransactionCosts) => {
          methodsPrices[method.name] = {
            safe: method.safe ? formatUnits(method.safe.toString(), EtherUnitsEnum.ETHER) : null,
            proposed: method.proposed ? formatUnits(method.proposed.toString(), EtherUnitsEnum.ETHER) : null,
            fast: method.fast ? formatUnits(method.fast.toString(), EtherUnitsEnum.ETHER) : null,
          };
        });
        methodsGasByChain[item] = { methodsPrices, currency };
      }
    } catch (error) {
      console.log(`error on gas fetch with message: ${error}`);
    }

    return methodsGasByChain;
  }
}
