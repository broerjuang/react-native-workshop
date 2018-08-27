// @flow

import {combineReducers} from 'redux';

import loginReducer from '../features/auth/reducers/loginReducer';
import searchReducer from '../features/search/reducers/searchReducer';
import profileReducer from '../features/profile/reducers/profileReducer';
import repositoryReducer from '../features/repository/reducers/repositoryReducer';
// import markAsReadReducer from './markAsReadReducer';

export default combineReducers({
  loginReducer,
  searchReducer,
  repositoryReducer,
  profileReducer,
});
