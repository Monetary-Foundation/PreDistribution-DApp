/**
*
* TxLink
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { networks } from 'utils/constants';

function TxLink(props) {
  const { tx, networkId } = props;
  const explorerUrl = networks[networkId] && networks[networkId].txExplorer;
  if (!explorerUrl) {
    return (
      <span> {tx && tx.toString().substring(0, 15)}...</span>
    );
  }

  return (
    <a target="_blank" rel="noopener" href={`${explorerUrl}${tx}`}>
      {tx && tx.toString().substring(0, 15)}...
    </a>
  );
}

TxLink.propTypes = {
  tx: PropTypes.string,
  networkId: PropTypes.number,
};

export default TxLink;

