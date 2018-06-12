/**
*
* Web3Status
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'antd';
import AddressLink from '../AddressLink';

const Token = styled.div`
  font-size: 3em;
  overflow-x: hidden;
`;
const Symbol = styled.div`
  font-size: 2em;
`;

function Web3Status(props) {
  const {
    initStatus,
    web3,
    networkId,
    // networkName,
    tokenName,
    tokenSymbol,
    tokenAddress,
    distributionAddress,
    // tokenList,
  } = props;

  if (initStatus === 'loading') {
    return (
      <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
        <div> init in progress, check Mist/Metamask is connected to Ropsten / mainnet and unlocked ....</div>
      </Col>
    );
  }

  if (initStatus === 'error') {
    return (
      <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
        <div> {web3} </div>
      </Col>
    );
  }

  const provider = web3 && web3.currentProvider && web3.currentProvider.constructor.name;
  return (
    <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }} style={{ overflowX: 'hidden' }}>
      <Token>{tokenName}</Token>
      <Symbol>{`(${tokenSymbol})`}</Symbol>
      <br />
      Distribution Contract: <br />
      <AddressLink address={distributionAddress} networkId={networkId} /><br /><br />
      Token Contract: <br />
      <AddressLink address={tokenAddress} networkId={networkId} />
      <br /> <br />
      Web3 Provider: <br /> {provider || 'no web3 provider specified'} <br /><br />
      <b><a target="_blank" rel="noopener" href="https://monetarycoin.org/distribution">Distribution Details</a></b><br />
      <a target="_blank" rel="noopener" href="https://monetarycoin.org">MonetaryCoin Homepage</a><br />
      <a target="_blank" rel="noopener" href="https://github.com/Monetary-Foundation/MonetaryCoin">MonetaryCoin source code</a><br /><br />
    </Col>
  );
}

Web3Status.propTypes = {
  initStatus: PropTypes.string,
  web3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  networkId: PropTypes.number,
  // networkName: PropTypes.string,
  tokenName: PropTypes.string,
  tokenSymbol: PropTypes.string,
  tokenAddress: PropTypes.string,
  distributionAddress: PropTypes.string,
  // tokenList: PropTypes.array,
};

export default Web3Status;
