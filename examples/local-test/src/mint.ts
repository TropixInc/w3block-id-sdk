import 'dotenv/config';

import { PixChain, TropixNFT721 } from '@tropixinc/pixwayid-sdk';
const pixchain = new PixChain({
  apiKey: process.env.PIXCHAIN_API_KEY ?? '',
  signatureKey: process.env.PIXCHAIN_SIGNATURE_KEY ?? '',
  environment: <any>process.env.PIXCHAIN_ENVIRONMENT ?? 'staging',
});

async function main() {
  const address = '0x1a17d9bCbC4b077C69d7f93155408995144A277F';

  // this is the id of the staging environment
  const contractDeploymentId = '89dbd57a-2311-4907-897b-d7a90ef84406';
  const contract = await pixchain.contracts.getContractAt<TropixNFT721>(contractDeploymentId);

  console.log('getNextTokenId', await (await contract.getNextTokenId()).toNumber());

  const txMint = await contract.mint(address, { from: address });

  console.dir({ txMint });
}

main().then(() => {
  console.log('script running with success');
});
