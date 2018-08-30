//@flow
import {fork} from 'redux-saga/effects';
import authSaga from '../features/auth/sagas';
import profilesaga from '../features/profile/sagas/profileSaga';
import starSaga from '../features/star/sagas/starSaga';

export default function* rootSaga(): Iterable<*> {
  yield fork(authSaga);
  yield fork(profilesaga);
  yield fork(starSaga);
}
