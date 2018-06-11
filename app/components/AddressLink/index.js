/**
*
* AddressLink
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { networks } from 'utils/constants';

// const explorer = {
//   1: 'https://etherscan.io/address/',
//   3: 'https://ropsten.etherscan.io/address/',
// };


function AddressLink(props) {
  const { address, networkId } = props;
  const explorerUrl = networks[networkId] && networks[networkId].explorer;
  if (!explorerUrl) {
    return (
      <span> {address && address.toString()}
      </span>
    );
  }

  return (
    <a target="_blank" rel="noopener" href={`${explorerUrl}${address}`}>
      {address.toString()}
    </a>
  );
}

AddressLink.propTypes = {
  address: PropTypes.string,
  networkId: PropTypes.number,
};

export default AddressLink;
