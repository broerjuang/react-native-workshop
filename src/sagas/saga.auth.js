//@flow
import {put, takeLatest, call} from 'redux-saga/effects';
import authenticateWithGithubAsync from '../api/authWithGithub';
import {AsyncStorage} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {
  AUTH_GITHUB_REQUESTED,
  AUTH_GITHUB_SUCCED,
  AUTH_GITHUB_FAILED,
  GITHUB_TOKEN,
} from '../actions';
import checkToken from '../helpers/checkToken';

function* authLogin(): Iterable<any> {
  yield takeLatest(AUTH_GITHUB_REQUESTED, fetchUser);
}

function* fetchUser(): Iterable<any> {
  try {
    let token = yield call(checkToken());
    if (token) {
      yield put({type: AUTH_GITHUB_SUCCED, payload: {token}});
      yield put(NavigationActions.navigate({routeName: 'GitClient'}));
    } else {
      let token = yield call(authenticateWithGithubAsync);
      yield put({type: AUTH_GITHUB_SUCCED, payload: {token}});
      yield put({type: GITHUB_TOKEN, payload: {token}});
      yield AsyncStorage.setItem('token', token);
    }
  } catch (e) {
    yield put({type: AUTH_GITHUB_FAILED, payload: {message: e}});
  }
}

export default authLogin;
