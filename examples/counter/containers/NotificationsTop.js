import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Notifications from '../components/Notifications';

function mapStateToProps(state) {
  return {
    notification: state.notification
  };
}

export default connect(mapStateToProps)(Notifications);
