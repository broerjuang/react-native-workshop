//@flow
import {fork} from 'redux-saga/effects';
import profileSaga from '../features/profile/sagas/profileSaga';

function* rootSaga(): Generator<*, *, *> {
  yield fork(profileSaga);
}

export default rootSaga;
