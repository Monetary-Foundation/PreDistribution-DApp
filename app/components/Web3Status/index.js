/**
*
* Web3Status
*
*/
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// function Status({ web3 }) {
//   const provider = web3.currentProvider && web3.currentProvider.constructor.name;
//   return (
//     <span>
//       Initiated, provider: {provider || 'No connection to http provider, check connectivity to local node'}
//     </span>
//   );
// }

function Web3Status(props) {
  const {
    initStatus,
    web3,
    networkName,
    tokenName,
    tokenAddress,
    distributionAddress,
    tokenList,
  } = props;

  if (initStatus === 'loading') {
    return <div> init in progress, check Mist/Metamask is connected to a network ....</div>;
  }

  if (initStatus === 'error') {
    return <div> {web3} </div>;
  }

  const provider = web3 && web3.currentProvider && web3.currentProvider.constructor.name;
  return (
    <div>
      Init successesful <br />
      web3 provider: {provider || 'no provider specified'} <br />
      networkName: {networkName} <br />
      tokenName: {tokenName} <br />
      tokenAddress: {tokenAddress} <br />
      distributionAddress: {distributionAddress} <br />
      tokenList: {JSON.stringify(tokenList, 0, 2)}<br />
    </div>
  );
}

Web3Status.propTypes = {
  initStatus: PropTypes.string,
  web3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  networkName: PropTypes.string,
  tokenName: PropTypes.string,
  tokenAddress: PropTypes.string,
  distributionAddress: PropTypes.string,
  tokenList: PropTypes.array,
};

export default Web3Status;
