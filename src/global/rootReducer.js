// @flow

import {combineReducers} from 'redux';
import notificationReducer from '../features/notification/reducers/notificationReducer';
import loginReducer from '../features/auth/reducers/loginReducer';
import profileReducer from '../features/profile/reducers/profileReducer';
import searchReducer from '../features/search/reducers/searchReducer';
import followingReducer from '../features/following/reducers/followingReducer';
import followersReducer from '../features/followers/reducers/followersReducer';
import userReducer from '../features/user/reducers/userReducer';
import starReducer from '../features/star/reducers/starReducer';
import eventsReducer from '../features/events/reducers/eventsReducer';

export default combineReducers({
  loginReducer,
  searchReducer,
  notificationReducer,
  profileReducer,
  followingReducer,
  followersReducer,
  userReducer,
  starReducer,
  eventsReducer,
});
