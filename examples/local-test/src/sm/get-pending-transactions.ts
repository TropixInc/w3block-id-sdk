/* eslint-disable @typescript-eslint/no-unused-vars */
import { SigningManager } from '@tropixinc/pixwayid-sdk';
import 'dotenv/config';
async function main() {
  const address = '0xf6c1ccec8fa651185e4d1cd0dd5192b164455356';
  const chainId = 1337;
  const txId = '6da0fa61-2443-436a-9423-6112ba84d0d2';
  const txHash = '0xcb338bc1fe004263530ccecba781880dd03d2dec6a1d149967e907b96f83ad28';

  const signingManager = new SigningManager({
    apiKey: process.env.PIXCHAIN_API_KEY ?? '',
    environment: 'development',
    endpoint: process.env.PIXCHAIN_ENDPOINT ?? '',
  });

  const pendingTransactions = await signingManager.transaction.getPending(address, chainId);
  console.dir({ pendingTransactions });

  // const ackTransactions = await signingManager.transaction.ack(txId, txHash);
  // console.dir({ ackTransactions });
}
main().then(() => {
  console.log('script running with success');
});
