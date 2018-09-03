//@flow
import {fork} from 'redux-saga/effects';
import authSaga from '../features/splash/sagas';

import profilesaga from '../features/profile/sagas/profileSaga';
import notificationSaga from '../features/notification/sagas/notificationSaga';
import followersSaga from '../features/followers/sagas/followersSaga';
import followingSaga from '../features/following/sagas/followingSaga';
import userSaga from '../features/user/sagas/userSaga';
import starSaga from '../features/star/sagas/starSaga';
import eventSaga from '../features/events/sagas/eventSaga';

export default function* rootSaga(): Iterable<*> {
  yield fork(authSaga);
  yield fork(profilesaga);
  yield fork(notificationSaga);
  yield fork(followersSaga);
  yield fork(followingSaga);
  yield fork(userSaga);
  yield fork(eventSaga);
}
