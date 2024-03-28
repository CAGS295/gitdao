import { Wallet } from "ethers";
import { Context, ContextParams, Client } from "@aragon/sdk-client";
import { getDaoBalances, getDaoDetails, getMembers, getPluginAddress } from "./client/client";
//import { SupportedNetwork } from "@aragon/sdk-client-common";


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

export const context: Context = new Context(contextParams);

// Instantiate the general purpose client from the Aragon OSx SDK context.
const client: Client = new Client(context);

// Address or ENS of the DAO whose metadata you want to retrieve.
//const daoAddressOrEns: string = "0xc432356f9f2da794dda3df10706ea34dc18a725d"; // ea.dao.eth
const daoAddressOrEns: string = "0x0d870e2ea982298d7756ac6aefe90271dabb80b5"; // gitdao testnet

//getDaoDetails(client, daoAddressOrEns);
//getDaoBalances(client, daoAddressOrEns);
//getMembers(client, daoAddressOrEns);
getPluginAddress(client, daoAddressOrEns);