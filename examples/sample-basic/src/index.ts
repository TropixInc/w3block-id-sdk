import 'dotenv/config';
import { PixChain, ERC721Sample } from '@tropixinc/pixwayid-sdk';

async function main() {
  const address = '0x0000000000000000000000000000000000000000';
  const pixchain = new PixChain({
    apiKey: '5982c6c93f7b068088483f6203ac862efaca685286d0a501117336b7ac27349e',
    signatureKey: '762fce384844311eb7e03acdcac0c4bcabb433ccf96038972bb3c2b27f595d5b',
    environment: 'development',
  });
  const contracts = await pixchain.contracts.getStandards();

  console.log('contracts', contracts);
  const contractERC721Sample = contracts.find((contract) => contract.uniqueName === 'ERC721Sample');
  if (contractERC721Sample?.lastContractSourceId) {
    const deploy = await pixchain.deploy
      .setContractSourceId(contractERC721Sample.lastContractSourceId)
      .setChainId(4)
      .setFrom(address)
      .setArguments('PixchainSample', 'PIXCHAIN')
      .build();
    console.log('deploy', deploy);

    const contract = await pixchain.getContractAt<ERC721Sample>(deploy.contractDeploymentId);
    console.log(deploy);
    const uri = await contract.tokenURI(0);
    console.log('uri', uri);
    const mint = await contract.safeMint(address, 1, 'http://sample-uri.com', {
      from: address,
    });
    console.log('transactionId', mint);

    if (mint.transactionId) {
      const mintTransaction = await pixchain.getTransactionAt(mint.transactionId);
      console.log('transaction', mintTransaction);
    }
  }

  const myDeployment = await pixchain.getDeploymentByOwner({
    address,
    chainId: 4,
  });

  console.log('myDeployment', myDeployment);
}

main().then(() => {
  console.log('script running with success');
});
