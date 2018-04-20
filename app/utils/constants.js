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
        distributionAddress: '0x704708916d137965f8cb0bf59727d4a68716797b',
        address: '0x84b628dd0d4a55ee1fb676cb747e1436829fb6c0',
      },
      {
        name: 'MUK',
        distributionAddress: '0x704708916d137965f8cb0bf59727d4a68716797b',
        address: '0x84b628dd0d4a55ee1fb676cb747e1436829fb6c0',
      },
    ],
  },
};
