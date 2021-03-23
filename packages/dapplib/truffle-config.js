require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'install infant fox turn fan riot noise concert harvest fashion equal gauge'; 
let testAccounts = [
"0x000207f34a511a8b15c4346099ea70f75ec7bdc0a2465a1f1a849c3424497320",
"0x4d68be13b007e5f7b55da77bca2219e88cd4ed63e88ca807d5269ee6e4d85e67",
"0x561ec5d519f85ca1387e6e0a84ca303b705821ffdc2d3745c35de46b55d9ebf7",
"0x98864f0e85b0057f291e75d67dde7bcebbeaf5514b944e36ba3a748aefeb2fe1",
"0x6075b0d7026b2591cc28fc5fe52da4b280471bd131dbfbcc7e121d4f4cdfcb68",
"0xd2299d70c5d20fb261f032f4b0044634136dbe2d4ef5e56d2237d1feefa3ee9c",
"0xc4b74a54dcb48444b58020f1a3aa0bad931062c9612e72476d2f709c7d29ecd4",
"0x9fde8d8059ea83b180ff93f30057c97caa225adcc09534d83cc6ced64c282a65",
"0x69f37c47f7ae557fd82bc2d2dc457d678f046649ce61b75ee596716fc2e1beb5",
"0xc7826a8f81092409a333adfbb0a391197fbaec2e5020621c902f7010b4181a04"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

