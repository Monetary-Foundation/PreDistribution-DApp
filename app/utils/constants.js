export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const website = 'https://github.com/MonetaryCoin/MCoin-PreDistribution-DApp';

// case 1:
// console.log('This is mainnet')
// break
// case 2:
// console.log('This is the deprecated Morden test network.')
// break
// case 3:
// console.log('This is the ropsten test network.')
// break
// case 4:
// console.log('This is the Rinkeby test network.')
// break
// case 42:
// console.log('This is the Kovan test network.')
// break
// default:
// console.log('This is an unknown network.')

export const distributionContracts = {
  1: {
    networkName: 'Mainnet',
    defaultTokenName: 'MUSA',
    tokenList:
    [
      {
        name: 'MUSA',
        address: '0x023be0e83e2711472179cb8123133f3eaf85a185',
        distributionAddress: '0x023be0e83e2711472179cb8123133f3eaf85a185',
      },
      {
        name: 'MUK',
        address: '0x023be0e83e2711472179cb8123133f3eaf85a185',
        distributionAddress: '0x023be0e83e2711472179cb8123133f3eaf85a185',
      },
    ],
  },
  3: {
    networkName: 'Ropsten',
    defaultTokenName: 'MUSA',
    tokenList:
    [
      {
        name: 'MUSA',
        address: '0x023be0e83e2711472179cb8123133f3eaf85a185',
        distributionAddress: '0x023be0e83e2711472179cb8123133f3eaf85a185',
      },
      {
        name: 'MUK',
        address: '0x023be0e83e2711472179cb8123133f3eaf85a185',
        distributionAddress: '0x023be0e83e2711472179cb8123133f3eaf85a185',
      },
    ],
  },
  default: {
    networkName: 'LocalHost',
    defaultTokenName: 'MUSA',
    tokenList:
    [
      {
        name: 'MUSA',
        distributionAddress: '0x58c2aa13b0e7cf634e4e9b2b08bbd47124e28e63',
        address: '0xf779fc7193eccf8cd019e584f536898c8df1e6a8',
      },
      {
        name: 'MUK',
        distributionAddress: '0x58c2aa13b0e7cf634e4e9b2b08bbd47124e28e63',
        address: '0xf779fc7193eccf8cd019e584f536898c8df1e6a8',
      },
    ],
  },
};
