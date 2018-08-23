//@flow
import {put, takeLatest, call} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {USERTOKEN} from './../../../global/constants/asyncStorage';
import fetchJSON from '../api/fetchJson';
import {
  AUTH_GITHUB_REQUESTED,
  AUTH_GITHUB_SUCCED,
  AUTH_GITHUB_FAILED,
  GITHUB_TOKEN,
} from '../actions/loginReducer.action';
// import checkToken from '../helpers/checkToken';
function* authLogin(): Iterable<any> {
  yield takeLatest(AUTH_GITHUB_REQUESTED, fetchUser);
}

function* fetchUser(): Iterable<any> {
  try {
    let hasToken = yield AsyncStorage.getItem(USERTOKEN);
    let currentUser = yield fetchJSON('user', 'GET', hasToken);
    if (currentUser) {
      const payload = JSON.parse(hasToken);
      yield put({type: AUTH_GITHUB_SUCCED, payload});
    } else {
      yield put(NavigationActions.navigate({routeName: 'GitClient'}));
      // let token = yield call(authenticateWithGithubAsync);
      yield put({type: AUTH_GITHUB_SUCCED, payload: {hasToken}});
      yield put({type: GITHUB_TOKEN, payload: {hasToken}});
      yield AsyncStorage.setItem('token', hasToken);
    }
  } catch (e) {
    yield put({type: AUTH_GITHUB_FAILED, payload: {message: e}});
  }
}
export default authLogin;
