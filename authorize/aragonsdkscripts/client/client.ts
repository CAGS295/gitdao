import { AssetBalance, Client, DaoBalancesQueryParams, TokenVotingClient, TokenVotingMember, DaoDetails, Context } from '@aragon/sdk-client';
import { exit } from 'process';

export async function getDaoDetails(client: Client, daoAddressOrEns: string) {
    // Get a DAO's details.
    const dao: DaoDetails | null = await client.methods.getDao(daoAddressOrEns);
    console.log(dao);
}

// This function retrieves the address of a plugin installed in a DAO.
export async function getPluginAddress(client: Client, daoAddressOrEns: string, pluginId: string): Promise<string> {
    const dao: DaoDetails | null = await client.methods.getDao(daoAddressOrEns);
    const plugin = dao?.plugins.find(plugin => plugin.id === pluginId);
    if (plugin) {
        //console.log("Plugin address is: "+plugin.instanceAddress); // For debugging
        return plugin.instanceAddress;
    } else {
        throw new Error('Plugin not found.');
    }
}

export async function getDaoBalances(client: Client, daoAddressOrEns: string) {
    // Get a DAO's Balances.
    const daoBalances: AssetBalance[] | null = await client.methods.getDaoBalances({ daoAddressOrEns });
    console.log(daoBalances);
}

export async function getMembers(client: Client, daoAddressOrEns: string, ctx: Context): Promise<TokenVotingMember[]> {
    // Create a TokenVoting client
    const tokenVotingClient: TokenVotingClient = new TokenVotingClient(ctx);
    const pluginId = 'token-voting.plugin.dao.eth'; // The id you're searching for
    const pluginAddress = await getPluginAddress(client, daoAddressOrEns, pluginId);
    //const pluginAddress: string = "0x1a760a06d0e430472cb1c6c58639200dcd15e8c2"; //  The address of the plugin that DAO has installed. You can find this by calling `getDao(daoAddress)` and getting the DAO details .
    return await tokenVotingClient.methods.getMembers(
        { pluginAddress },
    )
}



