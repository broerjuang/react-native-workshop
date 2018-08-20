//@flow
import {combineReducers} from 'redux';
import loginReducer from './reducer.login';
import navReducer from './reducer.navigation';

const reducer = combineReducers({
  loginState: loginReducer,
  nav: navReducer,
});
export default reducer;
