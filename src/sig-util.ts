import { MessageTypes, recoverTypedSignature, SignTypedDataVersion, TypedMessage } from '@metamask/eth-sig-util';
import { ethers } from 'ethers';
export class SigUtil {
  constructor() {
    // this.repository = repository;
  }

  /**
   * Get default template for a 'sign in' signed message.
   * @param from
   * @param chainId
   * @param nonce
   * @returns
   */
  getAuthMessageTemplate(from: string, chainId: number, nonce: number) {
    const msgParams: TypedMessage<MessageTypes> = {
      domain: {
        chainId,
        name: 'Tropix INC',
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
        version: '1',
      },
      message: {
        content: 'Please sign this message to authenticate',
        from: {
          name: 'Owner',
          wallets: [from],
        },
        nonce,
      },
      primaryType: 'Auth',
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
        Auth: [
          { name: 'from', type: 'Person' },
          { name: 'nonce', type: 'uint256' },
          { name: 'content', type: 'string' },
        ],
        Person: [
          { name: 'name', type: 'string' },
          { name: 'wallets', type: 'address[]' },
        ],
      },
    };
    return msgParams;
  }

  /**
   * Get the address from the given signature.
   * @param signature
   * @param message
   * @returns
   */
  recoverTypedSignature(signature: string, message: TypedMessage<MessageTypes>) {
    return recoverTypedSignature<SignTypedDataVersion.V4, MessageTypes>({
      data: message,
      signature,
      version: SignTypedDataVersion.V4,
    });
  }

  /**
   * Check if the from address matches the signature.
   * @param signature
   * @param from
   * @param chainId
   * @param nonce
   * @param message
   * @returns
   */
  validSignature(
    signature: string,
    from: string,
    chainId: number,
    nonce: number,
    message?: TypedMessage<MessageTypes>,
  ): boolean {
    const recoveredAddr = this.recoverTypedSignature(
      signature,

      message ?? this.getAuthMessageTemplate(from, chainId, nonce),
    );

    return ethers.utils.getAddress(recoveredAddr) === ethers.utils.getAddress(from);
  }
}
