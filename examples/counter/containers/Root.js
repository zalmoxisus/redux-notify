import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from './App';
import NotificationsTop from './NotificationsTop';

export default class Root extends Component {
  render() {
    return <div>
      <App />
      <NotificationsTop />
    </div>;
  }
}
