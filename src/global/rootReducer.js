// @flow

import {combineReducers} from 'redux';

import loginReducer from '../features/auth/reducers/loginReducer';
import searchReducer from '../features/search/reducers/searchReducer';
// import markAsReadReducer from './markAsReadReducer';
//
export default combineReducers({loginReducer, searchReducer});
