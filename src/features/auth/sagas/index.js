//@flow
import {put, takeLatest} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {USERTOKEN} from './../../../global/constants/asyncStorage';
import fetchJSON from '../api/fetchJson';

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
          login,
          name = '',
          email = '',
          private_gists = 0,
          public_repos = 0,
          avatar_url = '',
          followers = 0,
          following = 0,
        } = user;
        let payload = {
          token: hasToken,
          currentUser: {
            userName: login,
            name: name,
            email: email,
            avatar: avatar_url,
            privateGist: private_gists,
            publicRepos: public_repos,
            followers,
            following,
          },
        };
        // yield put(NavigationActions.navigate({routeName: 'GitClient'}));
        yield put({type: 'ACTIONS/AUTH_GITHUB_SUCCED', payload});
        yield AsyncStorage.setItem('currentUser', JSON.stringify(payload));
      }
    } else {
      // yield put(NavigationActions.navigate({routeName: ''}));
      // let token = yield call(authenticateWithGithubAsync);
      // yield put({type: 'ACTIONS/AUTH_GITHUB_SUCCED', payload: {hasToken}});
      // yield AsyncStorage.setItem(USERTOKEN, hasToken);
    }
  } catch (e) {
    yield put({type: 'ACTIONS/AUTH_GITHUB_FAILED', payload: {message: e}});
  }
}
export default authLogin;
