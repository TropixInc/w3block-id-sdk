import { ChainId, PixChain, TropixAuctionMarketplace } from '@tropixinc/pixwayid-sdk';
import 'dotenv/config';

async function main() {
  const address = '0x1a17d9bCbC4b077C69d7f93155408995144A277F';
  const pixchain = new PixChain({
    apiKey: process.env.PIXCHAIN_API_KEY ?? '',
    signatureKey: process.env.PIXCHAIN_SIGNATURE_KEY ?? '',
    environment: <any>process.env.PIXCHAIN_ENVIRONMENT ?? 'development',
  });

  const nftContract = '0x933be59b6d9d5a63124625d3b1021f2cf92f65dc';
  const auctionContract = '0x9c43cdea1874984422706dbd51ec59ca6f7ec4e1';
  const tokenId = 4;
  const contractAuction = await pixchain.contracts.getContract<TropixAuctionMarketplace>(
    ChainId.MUMBAI,
    auctionContract,
  );

  const auctionId = await contractAuction.getAuctionByContractAndToken(nftContract, tokenId);
  console.log('canCancelAuction', await contractAuction.canCancelAuction(auctionId, address));
  const tx = await contractAuction.cancelAuction(auctionId, { from: address });
  console.log(tx);
}

main().then(() => {
  console.log('script running with success');
});
