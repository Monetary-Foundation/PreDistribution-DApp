/**
*
* Withdraw
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button, InputNumber } from 'antd';
// import BlueButton from 'components/BlueButton';

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
      <h3> Withdraw tokens </h3>
      Window:{' '}
      <InputNumber
        min={0}
        step={1}
        value={withdrawWindow}
        onChange={(value) => onChangeWithdrawWindow(value)}
      />
      <br />
      WithdrawSendLoading: {withdrawSendLoading ? 'true' : 'false'} <br />
      WithdrawMinedLoading: {withdrawMinedLoading ? 'true' : 'false'} <br />
      Error: {withdrawError ? withdrawError.toString() : 'false'} <br />
      SendTx: {withdrawSendTx || 'null'} <br />
      MinedRecipt: {withdrawMinedRecipt ? '[object] ' : 'null'} <br />
      <Button type="primary" loading={withdrawMinedLoading} size="large" onClick={() => onWithdrawSend()}>
        Withdraw Tokens
      </Button>
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
