//@flow
import {combineReducers} from 'redux';
import loginReducer from './reducer.login';
import navReducer from './reducer.navigation';
export default combineReducers({loginState: loginReducer, nav: navReducer});
