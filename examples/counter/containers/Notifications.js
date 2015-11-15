import React, { Component, PropTypes } from 'react';
import ReactNotificationSystem from 'react-notification-system';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Notifications extends Component {
  static propTypes = {
    notification: PropTypes.object.isRequired
  };

  componentWillUpdate(nextProps) {
    this.refs.notifications.addNotification(nextProps.notification);
  }

  render() {
    return <ReactNotificationSystem ref='notifications' />;
  }
}

function mapStateToProps(state) {
  return {
    notification: state.notification
  };
}

export default connect(mapStateToProps)(Notifications);
