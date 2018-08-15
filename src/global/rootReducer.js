// @flow

import {combineReducers} from 'redux';

import loginReducer from '../features/auth/reducers/loginReducer';
import profileReducer from '../features/profile/reducers/profileReducer';
// import markAsReadReducer from './markAsReadReducer';
//
export default combineReducers({loginReducer, profileReducer});
