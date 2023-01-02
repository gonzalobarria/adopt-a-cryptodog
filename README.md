![This is an image](/public/aacd.jpg)

# Decentralized Escrow Application

This is an Escrow Dapp built with [Hardhat](https://hardhat.org/).

## Project Layout

There are three top-level folders:

1. `/pages` - contains the front-end application
2. `/contracts` - contains the solidity contract
3. `/tests` - contains tests for the solidity contract
4. `/mocks` - fake data for dogs

## Setup

Install dependencies in the top-level directory with `npm install`.

After you have installed hardhat locally, you can use commands to test and compile the contracts, among other things. To learn more about these commands run `npx hardhat help`.

Compile the contracts using `npx hardhat compile`. The artifacts will be placed in the `/pages` folder, which will make it available to the front-end. This path configuration can be found in the `hardhat.config.js` file.

## Front-End

To run the front-end application run `npm run dev`. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Considerations

This app was built for testing escrow contracts with a real-life-case.

## Accounts

### Arbiters:

```
Account: 0xcd3B766CCDd6AE721141F452C550Ca635964ce71
Private Key: 0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61

Account: 0x2546BcD3c84621e976D8185a91A922aE77ECEc30
Private Key: 0xea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0

Account: 0xbDA5747bFD65F08deb54cb465eB87D40e51B197E
Private Key: 0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd
```

### Sellers

```
Address: 0xBcd4042DE499D14e55001CcbB24a551F3b954096
Private Key: 0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897`

Address: 0x71bE63f3384f5fb98995898A86B02Fb2426c5788
Private Key: 0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82

Address: 0xFABB0ac9d68B0B445fB7357272Ff202C5651694a
Private Key: 0xa267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1

Address: 0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec
Private Key: 0x47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd

Address: 0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097
Private Key: 0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa
```
