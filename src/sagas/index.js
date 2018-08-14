//@flow
import {fork} from 'redux-saga/effects';
import authSaga from './saga.auth';

export default function* rootSaga(): Iterable<*> {
  yield fork(authSaga);
}
