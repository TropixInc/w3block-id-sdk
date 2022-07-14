import { ChainId, parseEther, PixChain, TropixAuctionMarketplace, TropixNFT721 } from '@tropixinc/pixwayid-sdk';
import 'dotenv/config';
import dayjs from 'dayjs';
async function main() {
  const address = '0x1a17d9bCbC4b077C69d7f93155408995144A277F';
  const pixchain = new PixChain({
    apiKey: process.env.PIXCHAIN_API_KEY ?? '',
    signatureKey: process.env.PIXCHAIN_SIGNATURE_KEY ?? '',
    environment: <any>process.env.PIXCHAIN_ENVIRONMENT ?? 'development',
  });
  const tokenId = 3;
  const nftContract = '0x933be59b6d9d5a63124625d3b1021f2cf92f65dc';
  const auctionContract = '0x9c43cdea1874984422706dbd51ec59ca6f7ec4e1';
  const contractNFT = await pixchain.contracts.getContractAt<TropixNFT721>('89dbd57a-2311-4907-897b-d7a90ef84406');
  const contractAuction = await pixchain.contracts.getContract<TropixAuctionMarketplace>(
    ChainId.MUMBAI,
    auctionContract,
  );
  const ownerToken = await contractNFT.ownerOf(tokenId);
  const isApprovedForAll = await contractNFT.isApprovedForAll(ownerToken, auctionContract);

  console.dir({ ownerToken, isApprovedForAll });

  const paramsStartOnBid = {
    nftContract,
    auctionType: await contractAuction.getAuctionTypeStartOnBid(),
    tokenId,
    // if not having the default duration, the value passed must be in seconds, example: 5 minutes would be 300
    // otherwise send 0
    duration: 0,
    endTime: 0, // this value must be 0
    startTime: 0, // this value must be 0
    startingPrice: parseEther('0.2'),
  };
  const canCreateAuctionStartOnBid = await contractAuction.canCreateAuction({ ...paramsStartOnBid, seller: address });
  console.log('canCreateAuctionStartOnBid', canCreateAuctionStartOnBid);

  const paramsStartOnTime = {
    nftContract,
    auctionType: await contractAuction.getAuctionTypeStartOnTime(),
    tokenId,
    // this value must be 0, and the contract calculates the difference endTime - startTime
    duration: 0,
    // the value passed must be in second
    endTime: convertDateInSeconds(dayjs().add(90, 'minute').toDate()),
    // the value passed must be in seconds
    startTime: convertDateInSeconds(dayjs().subtract(30, 'minute').toDate()),
    startingPrice: parseEther('0.2'),
  };
  const canCreateAuctionStartOnTime = await contractAuction.canCreateAuction({ ...paramsStartOnTime, seller: address });
  console.log('canCreateAuctionStartOnTime', canCreateAuctionStartOnTime);

  if (isApprovedForAll) {
    if (canCreateAuctionStartOnBid) {
      //auction start with bid
      const tx = await contractAuction.createAuction(paramsStartOnBid, { from: address });
      //Create an auction
      /* Printing the transaction details. */
      console.dir(tx);
    }

    if (canCreateAuctionStartOnTime) {
      //auction start with bid
      const tx = await contractAuction.createAuction(paramsStartOnTime, { from: address });
      //Create an auction
      console.dir(tx);
    }
  } else {
    const txSetApprovalForAll = await contractNFT.setApprovalForAll(auctionContract, true, { from: ownerToken });
    console.dir(txSetApprovalForAll);
  }
}

function convertDateInSeconds(date: Date) {
  return parseInt((date.getTime() / 1000).toString());
}

main().then(() => {
  console.log('script running with success');
});
