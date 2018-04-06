/**
*
* Commit
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import BlueButton from 'components/BlueButton';

function Commit(props) {
  const {
    commitEthSendWindow,
    commitEthSendAmount,
    commitEthSendLoading,
    commitEthSendError,
    commitEthSendTx,
    onChangeWindow,
    onChangeAmount,
    onCommitEthSend,
  } = props;

  return (
    <div>
      Commit funds <br />
      Window:{' '}
      <input
        type="text"
        style={{ border: '1px solid blue' }}
        value={commitEthSendWindow}
        onChange={(event) => onChangeWindow(event.target.value)}
      /><br />
      amount:{' '}
      <input
        type="text"
        style={{ border: '1px solid blue' }}
        value={commitEthSendAmount}
        onChange={(event) => onChangeAmount(event.target.value)}
      /><br />
      Loading: {commitEthSendLoading ? 'true' : 'false'} <br />
      Error: {commitEthSendError ? 'true' : 'false'} <br />
      sendTx: {commitEthSendTx || 'null'} <br />
      <BlueButton className="btn" onClick={() => onCommitEthSend()}>Commmit ETH</BlueButton>
    </div>
  );
}

Commit.propTypes = {
  commitEthSendWindow: PropTypes.number,
  commitEthSendAmount: PropTypes.number,
  commitEthSendLoading: PropTypes.bool,
  commitEthSendError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  commitEthSendTx: PropTypes.string,
  onChangeWindow: PropTypes.func,
  onChangeAmount: PropTypes.func,
  onCommitEthSend: PropTypes.func,

};

export default Commit;
