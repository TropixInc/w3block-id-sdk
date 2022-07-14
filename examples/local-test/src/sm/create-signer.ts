import { SigningManager } from '@tropixinc/pixwayid-sdk';
import 'dotenv/config';
async function main() {
  const address = '0xf6c1ccec8fa651185e4d1cd0dd5192b164455356';

  const signingManager = new SigningManager({
    apiKey: process.env.PIXCHAIN_API_KEY ?? '',
    environment: 'development',
    endpoint: process.env.PIXCHAIN_ENDPOINT ?? '',
  });

  console.dir(signingManager);

  const chainId = 1337;

  const pendingTransactions = await signingManager.transaction.getPending(address, chainId);

  console.dir(pendingTransactions);
}
main().then(() => {
  console.log('script running with success');
});
