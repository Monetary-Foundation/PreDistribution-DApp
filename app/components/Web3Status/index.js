/**
*
* Web3Status
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Icon } from 'antd';
import TokenIcon from 'components/TokenIcon';
import AddressLink from 'components/AddressLink';
import { applicationForm } from 'utils/constants';
import KycFormLink from 'components/KycFormLink';

const Token = styled.div`
  font-size: 3em;
  overflow-x: hidden;
`;
// const Symbol = styled.div`font-size: 2em;`;

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
        <div> init in progress, check Mist/Metamask is <b>connected</b> to Ropsten / mainnet <b>and unlocked</b> ....</div>
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
      <TokenIcon symbol={tokenSymbol} />
      {/* <Symbol>{`(${tokenSymbol})`}</Symbol> */}
      <br />
      Distribution Contract: <br />
      <AddressLink address={distributionAddress} networkId={networkId} /><br /><br />
      Token Contract: <br />
      <AddressLink address={tokenAddress} networkId={networkId} />
      <br /> <br />
      Web3 Provider: {provider || 'no web3 provider specified'} <br />
      Minimum commitment: <b> 0.01 Ether </b>
      <br /><br />
      <b><a target="_blank" rel="noopener" href="https://medium.com/monetary-protocol/monetarycoin-distribution-how-it-works-how-to-use-the-app-2f55afc79427">How it works? How to use?</a></b><br />
      <b><a target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=t-xkKHQ4204">Video Guide</a></b><br />
      <a target="_blank" rel="noopener" href="https://monetarycoin.org/distribution">Distribution Details</a><br />
      <a target="_blank" rel="noopener" href="https://github.com/Monetary-Foundation/MonetaryCoin">MonetaryCoin source code</a><br /><br />
      <Icon type="warning" style={{ fontSize: '1.8em', color: '#27e008' }} />
      <KycFormLink formUrl={applicationForm} />
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
