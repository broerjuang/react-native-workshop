//@flow
import {fork} from 'redux-saga/effects';
import authSaga from '../features/auth/sagas';
import profilesaga from '../features/profile/sagas/profileSaga';
import notificationSaga from '../features/notification/sagas/notificationSaga';

export default function* rootSaga(): Iterable<*> {
  yield fork(authSaga);
  yield fork(profilesaga);
  yield fork(notificationSaga);
}
