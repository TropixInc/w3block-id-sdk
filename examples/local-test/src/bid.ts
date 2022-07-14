import { ChainId, EtherUnitsEnum, formatUnits, PixChain, TropixAuctionMarketplace } from '@tropixinc/pixwayid-sdk';
import 'dotenv/config';

async function main() {
  const address = '0x095358452c33916513a3827a2d086da1aced7ee0';
  const pixchain = new PixChain({
    apiKey: process.env.PIXCHAIN_API_KEY ?? '',
    signatureKey: process.env.PIXCHAIN_SIGNATURE_KEY ?? '',
    environment: <any>process.env.PIXCHAIN_ENVIRONMENT ?? 'development',
  });

  const nftContract = '0x933be59b6d9d5a63124625d3b1021f2cf92f65dc';
  const auctionContract = '0x9c43cdea1874984422706dbd51ec59ca6f7ec4e1';
  const tokenId = 3;
  const contractAuction = await pixchain.contracts.getContract<TropixAuctionMarketplace>(
    ChainId.MUMBAI,
    auctionContract,
  );

  const auctionId = await contractAuction.getAuctionByContractAndToken(nftContract, tokenId);

  if (auctionId.toNumber() === 0) {
    return console.log('Auction not found');
  }
  const auction = await contractAuction.getAuction(auctionId);

  console.dir(auction);
  console.log('endTime', auction.endTime.toNumber());
  console.log(
    'currentPrice == ',
    auction.currentPrice.toString(),
    'ether',
    formatUnits(auction.currentPrice, EtherUnitsEnum.ETHER),
  );
  const minBidAmount = await contractAuction.getMinBidAmount(auctionId);
  console.log('minBidAmount == ', minBidAmount.toString(), 'ether', formatUnits(minBidAmount, EtherUnitsEnum.ETHER));

  const txCreateAuction = await contractAuction.placeBid(auctionId, {
    from: address,
    ether: formatUnits(minBidAmount, EtherUnitsEnum.ETHER),
  });
  // //Create an auction
  console.dir(txCreateAuction);
}

main().then(() => {
  console.log('script running with success');
});
