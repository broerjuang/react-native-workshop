// @flow

import {connect} from 'react-redux';
import UnreadScreen from '../features/notification/screens/UnreadScreen';
type Dispatch = (action: Object) => void;
export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    markAllAsRead: () => dispatch({type: 'MARK_ALL_AS_READ'}),
    markAsRead: (itemID: number) =>
      dispatch({type: 'MARK_AS_READ', payload: itemID}),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(UnreadScreen);
