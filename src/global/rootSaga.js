//@flow
import {fork} from 'redux-saga/effects';
import authSaga from '../features/auth/sagas';
export default function* rootSaga(): Iterable<*> {
  yield fork(authSaga);
}
