import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'react-toolbox/lib/snackbar';

class Notification extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired
  };

  componentWillUpdate() {
    this.refs.snackbar.show();
  }

  render () {
    return (
      <Snackbar
        icon='question-answer'
        label={this.props.label}
        ref='snackbar'
        type='accept'
        timeout={1}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    label: state.snackbar.label
  };
}

export default connect(mapStateToProps)(Notification);
