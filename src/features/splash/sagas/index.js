//@flow
import {put, takeLatest} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import {USERTOKEN} from './../../../global/constants/asyncStorage';
import fetchJSON from '../../../global/helpers/fetchJSON';

function* authLogin(): Iterable<any> {
  yield takeLatest('ACTIONS/AUTH_GITHUB_REQUESTED', fetchUser);
}
type CurrentUsers = {
  login: string;
  name: string;
  email: string;
  follower: number;
  private_gists: number;
  public_repos: number;
  avatar_url: string;
  followers: number;
  following: number;
};

function* fetchUser(): Iterable<any> {
  try {
    let hasToken = yield AsyncStorage.getItem(USERTOKEN);
    if (hasToken) {
      let user: ?CurrentUsers = yield fetchJSON('user', 'GET', hasToken);
      if (user && user.login) {
        let {
          login: userName,
          name = '',
          email = '',
          private_gists: privateGist = 0,
          public_repos: publicRepos = 0,
          avatar_url: avatar = '',
          followers = 0,
          following = 0,
        } = user;
        let payload = {
          token: hasToken,
          currentUser: {
            userName,
            name,
            email,
            avatar,
            privateGist,
            publicRepos,
            followers,
            following,
          },
        };
        yield put({type: 'ACTIONS/AUTH_GITHUB_SUCCED', payload});
        yield AsyncStorage.setItem('currentUser', JSON.stringify(payload));
      }
    } else {
      yield put({
        type: 'ACTIONS/AUTH_GITHUB_FAILED',
        payload: {message: 'token has been expired'},
      });
    }
  } catch (e) {
    yield put({type: 'ACTIONS/AUTH_GITHUB_FAILED', payload: {message: e}});
  }
}
export default authLogin;
