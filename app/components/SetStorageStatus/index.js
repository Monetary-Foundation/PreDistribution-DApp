/**
*
* SetStorageStatus
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function SetStorageStatus(props) { 
  const { setStorageValue, setStorageLoading, setStorageError } = props;
  
  return (
    <div>
      SetStorageStatus: <br />
      setStorageValue: {setStorageValue || 'null'} <br />
      setStorageLoading: {setStorageLoading? 'true' : 'false'} <br />
      setStorageError: {setStorageError || 'false'} <br /><br />
    </div>
  );
}

SetStorageStatus.propTypes = {
  setStorageValue: PropTypes.number,
  setStorageLoading: PropTypes.bool,
  setStorageError: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
};

export default SetStorageStatus;
