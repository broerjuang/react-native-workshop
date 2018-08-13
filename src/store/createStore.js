import {createStore, combineReducers} from 'redux';
import _markAsRead from '../reducers/markAsReadReducer';
import loginReducer from '../reducers/loginReducer';
export default createStore(combineReducers({_markAsRead, loginReducer}));
