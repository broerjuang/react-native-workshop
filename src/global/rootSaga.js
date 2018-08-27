//@flow
import {fork, all} from 'redux-saga/effects';
import profileSaga from '../features/profile/sagas/profileSaga';
import repositorySaga from '../features/repository/sagas/repositorySaga';

function* rootSaga(): Generator<*, *, *> {
  yield all([fork(profileSaga), fork(repositorySaga)]);
}

export default rootSaga;
