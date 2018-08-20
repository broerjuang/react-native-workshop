// @flow

import {combineReducers} from 'redux';
import notificationReducer from '../features/notification/reducers/notificationReducer';
import loginReducer from '../features/auth/reducers/loginReducer';
import searchReducer from '../features/search/reducers/searchReducer';

export default combineReducers({
  loginReducer,
  searchReducer,
  notificationReducer,
});
