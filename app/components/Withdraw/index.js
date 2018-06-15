/**
*
* Withdraw
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, InputNumber } from 'antd';
import ErrorDisplay from 'components/ErrorDisplay';
import TxDisplay from 'components/TxDisplay';
import SendLoadingIndicator from 'components/SendLoadingIndicator';

const DivS = styled.div`
  margin-top: 35px;
  margin-bottom: 15px;
`;

const DivS2 = styled.div`
  overflow-x: hidden;
`;

function Withdraw(props) {
  const {
    networkId,
    onChangeWithdrawWindow,
    onWithdrawSend,
    withdrawWindow,
    withdrawSendLoading,
    // withdrawMinedLoading,
    withdrawError,
    withdrawSendTx,
    withdrawMinedRecipt,
  } = props;

  const conditionalSpace = (!withdrawSendTx && !withdrawError) ? <br /> : null;

  return (
    <div>
      <h3> Withdraw tokens </h3>
      <DivS>
        Window:{' '}
        <InputNumber
          min={0}
          step={1}
          value={withdrawWindow}
          onChange={(value) => onChangeWithdrawWindow(value)}
        />
        <br /><br /><br />
        <Button type="primary" size="large" onClick={() => onWithdrawSend()}>
          Withdraw Tokens
        </Button>
        <SendLoadingIndicator
          loading={withdrawSendLoading}
          error={withdrawError}
          tx={withdrawSendTx}
          minedRecipt={withdrawMinedRecipt}
        />
      </DivS>
      <DivS2>
        {conditionalSpace}
        <TxDisplay tx={withdrawSendTx} networkId={networkId} />
        <ErrorDisplay error={withdrawError} />
        <br />
      </DivS2>
      {/* WithdrawSendLoading: {withdrawSendLoading ? 'true' : 'false'} <br />
      WithdrawMinedLoading: {withdrawMinedLoading ? 'true' : 'false'} <br />
      Error: {withdrawError ? withdrawError.toString() : 'false'} <br />
      SendTx: {withdrawSendTx || 'null'} <br />
  MinedRecipt: {withdrawMinedRecipt ? '[object] ' : 'null'} <br /> */}
    </div>
  );
}

Withdraw.propTypes = {
  networkId: PropTypes.number,
  onChangeWithdrawWindow: PropTypes.func,
  onWithdrawSend: PropTypes.func,
  withdrawWindow: PropTypes.number,
  withdrawSendLoading: PropTypes.bool,
  // withdrawMinedLoading: PropTypes.bool,
  withdrawError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  withdrawSendTx: PropTypes.string,
  withdrawMinedRecipt: PropTypes.object,
};

export default Withdraw;
