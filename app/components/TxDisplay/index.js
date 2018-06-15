/**
*
* TxDisplay
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import TxLink from 'components/TxLink'

function TxDisplay(props) {
  const { tx } = props;
  if (tx) {
    return (
      <div>
        Transaction TX : <TxLink {...props} />
      </div>
    );
  }
  return null;
}

TxDisplay.propTypes = {
  tx: PropTypes.string,
};

export default TxDisplay;
