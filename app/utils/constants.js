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
          distributionAddress: '0xc00e3bced9888895f07823448d4712c51f007689',
          address: '0xd7632660b2094e32eb870011af0c891a5d703ddf',
        },
        {
          name: 'MUK',
          distributionAddress: '0xc00e3bced9888895f07823448d4712c51f007689',
          address: '0xd7632660b2094e32eb870011af0c891a5d703ddf',
        },
      ],
  },
};
