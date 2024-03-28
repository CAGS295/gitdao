import { Wallet } from "ethers";
import { Context, ContextParams, Client } from "@aragon/sdk-client";
import { getMembers } from "./client/client";


const contextParams: ContextParams = {
  //network: "mainnet",
  network: "sepolia",
  //web3Providers: "https://rpc.ankr.com/eth", // https://rpc.ankr.com/eth_sepolia
  signer: Wallet.createRandom(),
  // Optional, but without it the client will not be able to resolve IPFS content
  ipfsNodes: [
    {
      url: "https://testing-ipfs-0.aragon.network/api/v0",
      headers: { "X-API-KEY": "b477RhECf8s8sdM7XrkLBs2wHc4kCMwpbcFC55Kt" },
    },
  ],
};

const ctx = new Context(contextParams);
// Instantiate the general purpose client from the Aragon OSx SDK context.
const client: Client = new Client(ctx);

const approve = async () => {
  const args = process.argv.slice(2);
  const k = args[0];
  const daoAddressOrEns = args[1];

  const Z = (await getMembers(client, daoAddressOrEns, ctx))
    .reduce((acc, v) => { return acc + v.votingPower; }, BigInt(0));

  let quorum = BigInt(k) * Z / BigInt(100);

  //TODO
  if (BigInt(0) < quorum) {
    console.log("Quorum not met");
    process.exitCode = 1;
  }
}

approve()