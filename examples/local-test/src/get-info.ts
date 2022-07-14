import { PixChain } from '@tropixinc/pixwayid-sdk';
import 'dotenv/config';
async function main() {
  const address = '0x9FeCC07273d5F5Cb22FF10c5Bb7Dc49e82e01ce9';
  const pixchain = new PixChain({
    apiKey: '5982c6c93f7b068088483f6203ac862efaca685286d0a501117336b7ac27349e',
    signatureKey: '762fce384844311eb7e03acdcac0c4bcabb433ccf96038972bb3c2b27f595d5b',
    environment: 'development',
  });

  const chainId = 4;

  const getGasInfo = await pixchain.blockchain.getGasInfo(chainId);
  const getTransactionCount = await pixchain.blockchain.getTransactionCount(address, chainId);

  console.log('getGasInfo', getGasInfo);
  console.log('getTransactionCount', getTransactionCount);
}
main().then(() => {
  console.log('script running with success');
});
