import {createStore, combineReducers} from 'redux';
import _markAsRead from '../reducers/markAsReadReducer';
import loginReducer from '../reducers/loginReducer';
import searchReducer from '../reducers/searchReducer';
export default createStore(
  combineReducers({_markAsRead, loginReducer, searchReducer}),
);
