//@flow
import {takeLatest, put} from 'redux-saga/effects';
import fetchJSON from '../../../global/helpers/fetchJSON';

function* userSaga(): Generator<*, *, *> {
  yield takeLatest('ON_USER_MOUNT', fetchUserData);
}

function* fetchUserData(item: *): Generator<*, *, *> {
  try {
    let followerProfile = yield fetchJSON(`users/${item.payload}`, `GET`);

    yield put({
      type: 'USER_SUCCESS',
      payload: followerProfile,
    });
  } catch (error) {
    console.log(error);
  }
}
export default userSaga;
