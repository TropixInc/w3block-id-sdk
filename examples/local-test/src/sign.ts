import { ChainId, PixChain } from '@tropixinc/pixwayid-sdk';
import 'dotenv/config';
async function main() {
  // const address = '0x9FeCC07273d5F5Cb22FF10c5Bb7Dc49e82e01ce9';
  const pixchain = new PixChain({
    apiKey: '5982c6c93f7b068088483f6203ac862efaca685286d0a501117336b7ac27349e',
    signatureKey: '762fce384844311eb7e03acdcac0c4bcabb433ccf96038972bb3c2b27f595d5b',
    environment: 'development',
  });

  const chainId = ChainId.LOCALHOST;
  const txData =
    '0xf9012a058435a4f27e827530949fe46736679d2d9a65f0992f2272de9f3c7fa6e080b8c4731133e9000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb9226600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000820a96a03701422fd380f18ee5470458a6ffc341fdc41216b77d2e69f6a5fa3bfeaf044da0603488c989716c0b1dd785792cffe4acf80ab250788df441aa97bc6a04fe7d9a';
  try {
    const sign = await pixchain.blockchain.sendSigned(txData, chainId);
    console.log('sign', sign);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.stack);
    }
    console.error('Sign error');
  }
}
main().then(() => {
  console.log('script running with success');
});
