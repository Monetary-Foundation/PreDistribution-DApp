export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const repoName = '/MCoin-PreDistribution-DApp/';
export const website = 'https://github.com/MonetaryCoin/MCoin-PreDistribution-DApp';
export const github = 'https://github.com/MonetaryCoin/MCoin-PreDistribution-DApp';

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
        distributionAddress: '0x023be0e83e2711472179cb8123133f3eaf85a185',
        address: '0x023be0e83e2711472179cb8123133f3eaf85a185',
      },
      {
        name: 'MERO',
        distributionAddress: '0x023be0e83e2711472179cb8123133f3eaf85a185',
        address: '0x023be0e83e2711472179cb8123133f3eaf85a185',
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
        distributionAddress: '0x73ca2d6418c20db6efb63e9c01cd538f8cc401b9',
        address: '0x8c18ae193135a53fae8e93b6ab4be3e7df4da11d',
      },
      {
        name: 'MERO',
        distributionAddress: '0x348025b7927e56e19d79a1776dd0928fa5427dbb',
        address: '0xaace03b8b31c08841094b9f3b784794ef208b8c1',
      },
    ],
  },
  default: {
    networkName: 'Local Host',
    defaultTokenName: 'MUSA',
    tokenList:
    [
      {
        name: 'MUSA',
        distributionAddress: '0x84b628dd0d4a55ee1fb676cb747e1436829fb6c0',
        address: '0x42780abe93e3837cf87890a847de69178425d242',
      },
      {
        name: 'MERO',
        distributionAddress: '0x54dca61511b6133a7a07ea15c9bd07a29166f433',
        address: '0x166892f015b96195cff7a2cdac38038be498fc4d',
      },
    ],
  },
};
