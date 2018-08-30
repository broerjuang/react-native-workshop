//@flow
import {fork} from 'redux-saga/effects';

import authSaga from '../features/auth/sagas';
import profilesaga from '../features/profile/sagas/profileSaga';
import followersSaga from '../features/followers/sagas/followersSaga';
import followingSaga from '../features/following/sagas/followingSaga';
import userSaga from '../features/user/sagas/userSaga';
import starSaga from '../features/star/sagas/starSaga';

export default function* rootSaga(): Iterable<*> {
  yield fork(authSaga);
  yield fork(profilesaga);
  yield fork(followersSaga);
  yield fork(followingSaga);
  yield fork(userSaga);
}
