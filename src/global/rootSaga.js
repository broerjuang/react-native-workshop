//@flow
import {fork} from 'redux-saga/effects';
import profileSaga from '../features/profile/sagas/profileSaga';
import notificationSaga from '../features/notification/sagas/notificationSaga';

function* rootSaga(): Generator<*, *, *> {
  yield fork(profileSaga);
  yield fork(notificationSaga);
}

export default rootSaga;
