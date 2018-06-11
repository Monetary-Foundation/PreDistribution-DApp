/**
*
* NetworkIndicator
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Tooltip } from 'antd';
import { networks } from 'utils/constants';

const IconS = styled(Icon)`
    margin-right: 10px`;

const Span = styled.span`
    color: ${(props) => props.color ? props.color : networks.default.color};
`;

function NetworkIndicator(props) {
  const { networkId } = props;

  if (!(networkId && networks[networkId])) {
    return (
      <Span color={networks.default.color}>
        <IconS type="compass" />{networks.default.name}
      </Span>
    );
  }

  return (
    <Span color={networks[props.networkId].color}>
      <Tooltip placement="bottom" title="Select network using Metamask/Web3 browser: Mainnet or Ropsten test net.">
        <IconS type="compass" />{networks[networkId].name}
      </Tooltip>
    </Span>
  );
}

NetworkIndicator.propTypes = {
  networkId: PropTypes.number,
};

export default NetworkIndicator;
