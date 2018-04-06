/*
 * HomePage
 *
 */

import React from 'react';
// import messages from './messages';
import { Link } from 'react-router-dom';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1>
        <Link to="/dashboard">Start Here (Load dashboard container)</Link>
      </h1>
    );
  }
}
