//@flow
import {fork, all} from 'redux-saga/effects';
import profileSaga from '../features/profile/sagas/profileSaga';
import repositorySaga from '../features/repository/sagas/repositorySaga';
import authSaga from '../features/auth/sagas';

function* rootSaga(): Generator<*, *, *> {
  yield all([fork(profileSaga), fork(repositorySaga), fork(authSaga)]);
}

export default rootSaga;

//export default function* rootSaga(): Iterable<*> {
//  yield fork(authSaga);
//}
