import React, { Component, PropTypes } from 'react';
import ReactNotificationSystem from 'react-notification-system';

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

export default Notifications;
