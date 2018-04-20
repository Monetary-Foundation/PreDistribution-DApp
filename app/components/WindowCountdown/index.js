/**
*
* WindowCountdown
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-count-down';
// import styled from 'styled-components';


const cb = () => {
  console.log('expired callback');
};


function WindowCountdown(props) {
  const { timestamp, startTimestamp, windowLenght } = props;

  const elapsed = timestamp - startTimestamp;
  const currentWindowElapsed = elapsed % windowLenght;
  const remaining = windowLenght - currentWindowElapsed;

  const OPTIONS = { endDate: Date.now() + (remaining * 1000), cb };
  return (
    <div>
      <Countdown options={OPTIONS} />
    </div>
  );
}

WindowCountdown.propTypes = {
  timestamp: PropTypes.number.isRequired,
  startTimestamp: PropTypes.number.isRequired,
  windowLenght: PropTypes.number.isRequired,
};

export default WindowCountdown;

