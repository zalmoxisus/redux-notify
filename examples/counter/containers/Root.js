import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from './App';
import Notifications from './Notifications';
import Snackbar from './Snackbar';

export default class Root extends Component {
  render() {
    return <div>
      <App />
      <Notifications />
      <Snackbar />
    </div>;
  }
}
