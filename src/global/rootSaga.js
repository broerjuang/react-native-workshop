//@flow
import {fork} from 'redux-saga/effects';
import profileSaga from '../features/profile/sagas/profileSaga';
import authSaga from '../features/auth/sagas';
import notificationSaga from '../features/notification/sagas/notificationSaga';

function* rootSaga(): Generator<*, *, *> {
  yield fork(profileSaga);
  yield fork(notificationSaga);
  yield fork(authSaga);
}

export default rootSaga;
