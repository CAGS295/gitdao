"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
var ethers_1 = require("ethers");
var sdk_client_1 = require("@aragon/sdk-client");
var client_1 = require("./client/client");
//import { SupportedNetwork } from "@aragon/sdk-client-common";
var contextParams = {
    //network: "mainnet",
    network: "sepolia",
    //web3Providers: "https://rpc.ankr.com/eth", // https://rpc.ankr.com/eth_sepolia
    signer: ethers_1.Wallet.createRandom(),
    // Optional, but without it the client will not be able to resolve IPFS content
    ipfsNodes: [
        {
            url: "https://testing-ipfs-0.aragon.network/api/v0",
            headers: { "X-API-KEY": "b477RhECf8s8sdM7XrkLBs2wHc4kCMwpbcFC55Kt" },
        },
    ],
};
exports.context = new sdk_client_1.Context(contextParams);
// Instantiate the general purpose client from the Aragon OSx SDK context.
var client = new sdk_client_1.Client(exports.context);
// Address or ENS of the DAO whose metadata you want to retrieve.
//const daoAddressOrEns: string = "0xc432356f9f2da794dda3df10706ea34dc18a725d"; // ea.dao.eth
var daoAddressOrEns = "0x0d870e2ea982298d7756ac6aefe90271dabb80b5"; // gitdao testnet
//getDaoDetails(client, daoAddressOrEns);
//getDaoBalances(client, daoAddressOrEns);
//getMembers(client, daoAddressOrEns);
(0, client_1.getPluginAddress)(client, daoAddressOrEns);
