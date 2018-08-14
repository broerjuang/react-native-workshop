//@flow
import {connect} from 'react-redux';
import LoginScreen from '../features/auth/screens/LoginScreen';
import {AUTH_GITHUB_REQUESTED} from '../actions';
const mapStateToProps = (state) => ({
  currenUser: state.loginState,
  nav: state.nav,
});
const mapDispatchToProps = (dispatch) => ({
  authGithub: () => dispatch({type: AUTH_GITHUB_REQUESTED}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
