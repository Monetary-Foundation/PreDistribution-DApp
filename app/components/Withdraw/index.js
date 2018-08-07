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
    currentWindow,
    // onChangeWithdrawWindow,
    onWithdrawSend,
    // withdrawWindow,
    withdrawSendLoading,
    // withdrawMinedLoading,
    withdrawError,
    withdrawSendTx,
    withdrawMinedRecipt,
    canParticipate,
  } = props;

  const conditionalSpace = (!withdrawSendTx && !withdrawError) ? <br /> : null;

  const noClosedWindows = (currentWindow === 0);

  const withdrawDisabled = noClosedWindows || !canParticipate;

  return (
    <div>
      <h3> Withdraw tokens </h3>
      <DivS>
        {/* Window:{' '}
        <InputNumber
          min={0}
          max={(currentWindow > 0) ? (currentWindow - 1) : 0}
          step={1}
          value={withdrawWindow}
          onChange={(value) => onChangeWithdrawWindow(value)}
          disabled
        />
        <br /><br /><br /> */}
        <br />
        <Button
          type="primary"
          size="large"
          onClick={() => onWithdrawSend()}
          disabled={withdrawDisabled}
        >
          Withdraw All
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
        {noClosedWindows ? 'Withdraw is possible once the first window is closed.' : null}
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
  currentWindow: PropTypes.number,
  // onChangeWithdrawWindow: PropTypes.func,
  onWithdrawSend: PropTypes.func,
  // withdrawWindow: PropTypes.number,
  withdrawSendLoading: PropTypes.bool,
  // withdrawMinedLoading: PropTypes.bool,
  withdrawError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  withdrawSendTx: PropTypes.string,
  withdrawMinedRecipt: PropTypes.object,
  canParticipate: PropTypes.bool,
};

export default Withdraw;
