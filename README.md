# MonetaryCoin PreDistribution-DApp

### A DAPP for interacting with the MonetaryCoin distribution contract

![eth-hot-wallet ethereum wallet preview](https://github.com/Monetary-Foundation/PreDistribution-DApp/docs/images/MonetaryCoin_distribution.jpg)

App Deployed to https://MonetaryCoin.io (blocked for the US)

### Additional info

[MonetaryCoin Homepage](https://MonetaryCoin.org)

[MonetaryCoin smart contracts](https://github.com/Monetary-Foundation/MonetaryCoin)

[White Paper](https://github.com/Monetary-Foundation/MonetaryCoin-White-Paper/blob/master/Monetary%20Protocol%20Whitepaper.pdf)


### Core components

- [ ] [LightWallet V3](https://github.com/ConsenSys/eth-lightwallet) 
- [ ] [Web3.js](https://github.com/ethereum/web3.js/) Ethereum JavaScript API V1.0
- [ ] [React-boilerplate](https://github.com/react-boilerplate/react-boilerplate) as a wrapper of React JS, Redux, Saga, Reselect, ImmutableJS and more
- [ ] [Ant Design](https://github.com/ant-design/ant-design) React js components
- [ ] [Webpack 3](https://github.com/webpack/webpack) - A bundler for javascript and friends.
- [ ] Many others, See [package.json](https://github.com/PaulLaux/eth-hot-wallet/blob/master/package.json)


### API Providers

- [ ] [Infura.io](https://infura.io/) as JsonRPC provider (fallback for non-web3 browsers)


### Features

- [x] Distribution general info
- [x] Commit to specific Window 
- [x] Withdraw token after window is closed
- [ ] Live Update from the blockchain


#### MonetaryCoin Distribution ABI
[MonetaryCoin Distribution ABI](https://github.com/Monetary-Foundation/PreDistribution-DApp/blob/master/app/utils/contracts/abi.js)

To initiate the contract we use
```javascript
web3.eth.contract(distributionAbi)
```


Like all other network communication in the app, calls to erc20 contracts are done inside `app/containers/Dashboard/saga.js`.
ERC20 Abi can be imported using 
```javascript
import { distributionAbi } from 'utils/contracts/abi';
```



#### npm scripts for MonetaryCoin PreDistribution-DApp:

`npm run build:dll` to build webpack DLL required for development.

`npm run start` to start development mode. Go to http://localhost:3002 - changes will be reflected in realtime using hot module reloading.

`npm run build` to create bundle for publishing

`npm run generate` to create new components / containers using the generator.

For more documentation regarding the react setup see [react-boiledplate docs](https://eth-hot-wallet.com/docs/react-boilerplate/) or the official repo.

After build, webpack monitor will generate stats about bundle size:


![eth-hot-wallet webpack-monitor](https://paullaux.github.io/eth-hot-wallet/docs/images/webpack-monitor.JPG)

## License

This project is licensed under the MIT license, Copyright (c) 2017 Paul Laux For more information see `LICENSE.md`.
