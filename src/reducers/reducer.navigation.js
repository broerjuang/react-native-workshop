//@flow
import {createNavigationReducer} from 'react-navigation-redux-helpers';
import RootNavigation from '../routes';
const navReducer = createNavigationReducer(RootNavigation);
export default navReducer;
