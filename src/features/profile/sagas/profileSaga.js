import {put, all, takeLatest} from 'redux-saga/effects';
import fetchJSON from '../../../global/helpers/fetchJSON';

//watcher
export default function* onPageInit() {
  yield takeLatest('ON_PAGE_MOUNT', fetchDataForPage);
}

//saga
export function* fetchDataForPage(action) {
  let userLogin = action.payload.userLogin;

  let buildstring = {
    user: '',
    star: '',
    orgs: '',
  };

  if (action.payload.userLogin === '') {
    buildstring.user = 'user';
    buildstring.star = 'user/starred';
    buildstring.orgs = 'user/orgs';
  } else {
    buildstring.user = `users/${userLogin}`;
    buildstring.star = `users/${userLogin}/starred`;
    buildstring.orgs = `users/${userLogin}/orgs`;
  }

  try {
    let {user, star, orgs} = yield all({
      user: fetchJSON(buildstring.user, 'GET'),
      star: fetchJSON(buildstring.star, 'GET'),
      orgs: fetchJSON(buildstring.orgs, 'GET'),
    });

    yield all([
      put({type: 'PROFILE_SUCCESS', payload: user}),
      put({type: 'STAR_SUCCESS', payload: star}),
      put({type: 'ORGANIZATION_SUCCESS', payload: orgs}),
    ]);
  } catch (e) {
    yield put({type: 'ON_PAGE_MOUNT_ERROR', payload: {message: e}});
  }
}
