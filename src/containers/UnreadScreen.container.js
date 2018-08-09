// @flow

import UnreadScreen from '../features/notification/screens/UnreadScreen';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    markAsRead: (itemID: number) =>
      dispatch({type: 'MARK_AS_READ', payload: itemID}),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(UnreadScreen);
