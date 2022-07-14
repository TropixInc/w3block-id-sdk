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
  const from = '0x6CfBB59ea03ab9750921FD4911dE5161af5f3846';
  const signature = `0x017e5655979076ae5d4cd80677f9e0c3bf012dab643a85f4a9ae077da872806d515f8379aa3f93da73b00f19257d02149b32adba75516c82ed701704707c57631c`;
  const nonce = 45;
  try {
    const sign = await pixchain.sigUtil.validSignature(signature, from, chainId, nonce);
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
