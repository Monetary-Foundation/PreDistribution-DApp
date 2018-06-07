export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const repoName = '/PreDistribution-DApp/';
export const website = 'https://github.com/Monetary-Foundation/PreDistribution-DApp';
export const github = 'https://github.com/Monetary-Foundation/PreDistribution-DApp';

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
    defaultTokenName: 'MERO',
    tokenList:
    [
      {
        name: 'MERO',
        distributionAddress: '0x023be0e83e2711472179cb8123133f3eaf85a185',
        address: '0x023be0e83e2711472179cb8123133f3eaf85a185',
      },
      {
        name: 'MCHI',
        distributionAddress: '0x023be0e83e2711472179cb8123133f3eaf85a185',
        address: '0x023be0e83e2711472179cb8123133f3eaf85a185',
      },
    ],
  },
  3: {
    networkName: 'Ropsten',
    defaultTokenName: 'MERO',
    tokenList:
    [
      {
        name: 'MERO',
        distributionAddress: '0x0bcb300c55c12d6f183b2a106fee3a8b0bc84403',
        address: '0xb39fc5e11281012b4d83407a457d409ba344744f',
      },
      {
        name: 'MCHI',
        distributionAddress: '0xbeae1acd8a35c7b64463507629a6a6f17170df00',
        address: '0x8b293fb839a2a0976662fcd787c5134e7920bf5d',
      },
    ],
  },
  default: {
    networkName: 'Local Host',
    defaultTokenName: 'MERO',
    tokenList:
    [
      {
        name: 'MERO',
        distributionAddress: '0x0bcb300c55c12d6f183b2a106fee3a8b0bc84403',
        address: '0xb39fc5e11281012b4d83407a457d409ba344744f',
      },
      {
        name: 'MCHI',
        distributionAddress: '0xbeae1acd8a35c7b64463507629a6a6f17170df00',
        address: '0x8b293fb839a2a0976662fcd787c5134e7920bf5d',
      },
    ],
  },
};
