/**
*
* Withdraw
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import BlueButton from 'components/BlueButton';

function Withdraw(props) {
  const {
    onChangeWithdrawWindow,
    onWithdrawSend,
    withdrawWindow,
    withdrawSendLoading,
    withdrawMinedLoading,
    withdrawError,
    withdrawSendTx,
    withdrawMinedRecipt,
  } = props;


  return (
    <div>
      Withdraw tokens <br />
      Window:{' '}
      <input
        type="text"
        style={{ border: '1px solid blue' }}
        value={withdrawWindow}
        onChange={(event) => onChangeWithdrawWindow(Number(event.target.value))}
      /><br />
      WithdrawSendLoading: {withdrawSendLoading ? 'true' : 'false'} <br />
      WithdrawMinedLoading: {withdrawMinedLoading ? 'true' : 'false'} <br />
      Error: {withdrawError || 'false'} <br />
      SendTx: {withdrawSendTx || 'null'} <br />
      MinedRecipt: {withdrawMinedRecipt || 'null'} <br />
      <BlueButton className="btn" onClick={() => onWithdrawSend()}>Withdraw Tokens</BlueButton>
    </div>
  );
}

Withdraw.propTypes = {
  onChangeWithdrawWindow: PropTypes.func,
  onWithdrawSend: PropTypes.func,
  withdrawWindow: PropTypes.number,
  withdrawSendLoading: PropTypes.bool,
  withdrawMinedLoading: PropTypes.bool,
  withdrawError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  withdrawSendTx: PropTypes.string,
  withdrawMinedRecipt: PropTypes.object,
};

export default Withdraw;
