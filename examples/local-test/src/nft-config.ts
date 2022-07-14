/* eslint-disable @typescript-eslint/no-unused-vars */
import { PixChain, TropixNFT721 } from '@tropixinc/pixwayid-sdk';
import 'dotenv/config';

const pixchain = new PixChain({
  apiKey: process.env.PIXCHAIN_API_KEY ?? '',
  signatureKey: process.env.PIXCHAIN_SIGNATURE_KEY ?? '',
  environment: <any>process.env.PIXCHAIN_ENVIRONMENT ?? 'development',
});

async function main() {
  const address = '0x1a17d9bCbC4b077C69d7f93155408995144A277F';

  // this is the id of the staging environment
  const contractDeploymentId = '89dbd57a-2311-4907-897b-d7a90ef84406';
  const contract = await pixchain.contracts.getContractAt<TropixNFT721>(contractDeploymentId);
  const constants = {
    nftAddress: '0x933be59b6d9d5a63124625d3b1021f2cf92f65dc',
    paymentSplitterAddress: '0x671211972715305f75a15bd30a5e5ac53965e504',
  };
  const contractURI = `https://ntf-metadata.vercel.app/api/collection-metadata/${constants.nftAddress}.json?seller_fee_basis_points=10000&fee_recipient=${constants.paymentSplitterAddress}`;
  const baseURI = `https://ntf-metadata.vercel.app/api/nft-metadata/`;
  console.log('contractURI', await contract.contractURI());
  console.log('baseURI', await contract.baseURI());

  // const txContractURI = await contract.setContractURI(contractURI, { from: address });
  // const txBaseURI = await contract.setBaseURI(baseURI, { from: address });

  // console.dir({ txContractURI, txBaseURI });
}

main().then(() => {
  console.log('script running with success');
});
