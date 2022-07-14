import { PixChain, TropixDeployerFactory } from '@tropixinc/pixwayid-sdk';
import 'dotenv/config';

const pixchain = new PixChain({
  apiKey: process.env.PIXCHAIN_API_KEY ?? '',
  signatureKey: process.env.PIXCHAIN_SIGNATURE_KEY ?? '',
  environment: <any>process.env.PIXCHAIN_ENVIRONMENT ?? 'development',
});

async function main() {
  const address = '0x1a17d9bCbC4b077C69d7f93155408995144A277F';

  // this is the id of the staging environment
  const contractDeploymentId = '5d32154c-a01a-4733-8842-4cd15b404d42';
  const contract = await pixchain.contracts.getContractAt<TropixDeployerFactory>(contractDeploymentId);

  const name = 'Pixway ID';
  const symbol = 'PXC';
  const royaltyAmount_ = 1000; // 10%
  const payees = [address];
  const shares = [royaltyAmount_];
  const salt = await contract.getSalt(name, symbol, royaltyAmount_, payees, shares);

  const nftAddress = await contract.getNFTCloneAddress(salt);
  const splitterAddress = await contract.getPaymentSplitterCloneAddress(salt);

  console.log({ nftAddress, splitterAddress });

  const tx = await contract.deployNFTWithRoyaltyInitialize(name, symbol, royaltyAmount_, payees, shares, {
    from: address,
  });

  console.log(tx);
}

main().then(() => {
  console.log('script running with success');
});
