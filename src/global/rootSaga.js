//@flow
import {fork} from 'redux-saga/effects';
import authSaga from '../features/splash/sagas';
import profilesaga from '../features/profile/sagas/profileSaga';
export default function* rootSaga(): Iterable<*> {
  yield fork(authSaga);
  yield fork(profilesaga);
}
