require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid arena forward turtle crazy recipe pitch upgrade grace battle fringe giggle'; 
let testAccounts = [
"0x7850d1b489e4a84604fc49c4543f377df619ffabfdaf5c71d6c2e7d50293a67a",
"0x4469e5089fdc698f8dcb960b274746043ec4f9430cfb98984259ab68a1c70901",
"0x8e7291f7ad06d993fa35888ac6cd356f7466bb9b34a411bdade06c695ef879f2",
"0x5cb37b3e0a507b97f1b7dd094e1f75794cab409f44c52597929b18a645929d73",
"0x2b3edf5150df807699ee02a6d3a5fc2cef5a16fdf3f425ed779f462798088270",
"0x7bdf24ee8c4f5f7342f485fffd31bc8e5a04beaf5940e5eba249f85295d26f02",
"0x65f4dd09ad31d044dbab422ae95e3717feac5c74436e7d4b8cb96de218075784",
"0x86764c76dfd1eeff27ea0a0894253e0a2b98274a2f7e952d8b06bd63006085c1",
"0x904c058a1202912c4b23a9eccc69d0f1fc8ad8e3f32a3c5f5a0a899a751e366e",
"0x5dd581b640f01483760061152d72940234e518a2d09b9faf04dfa8b36c003e20"
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
            version: '^0.8.0'
        }
    }
};


