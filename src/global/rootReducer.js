// @flow

import {combineReducers} from 'redux';
import notificationReducer from '../features/notification/reducers/notificationReducer';
import loginReducer from '../features/auth/reducers/loginReducer';
import profileReducer from '../features/profile/reducers/profileReducer';
import searchReducer from '../features/search/reducers/searchReducer';
import starReducer from '../features/star/reducers/starReducer';

export default combineReducers({
  loginReducer,
  searchReducer,
  notificationReducer,
  profileReducer,
  starReducer,
});
