//@flow
import {takeLatest, put} from 'redux-saga/effects';
import fetchJSON from '../../../global/helpers/fetchJSON';

function* followersSaga(): Generator<*, *, *> {
  yield takeLatest('FOLLOWERS_REQUESTED', fetchFollowers);
}

function* fetchFollowers(): Generator<*, *, *> {
  try {
    let followers = yield fetchJSON(`user/followers`, 'GET');

    yield put({
      type: 'GET_FOLLOWERS_SUCCESS',
      payload: {
        followersData: followers,
      },
    });
  } catch (error) {
    //eslint-disable-next-line no-console
    console.log(error);
  }
}
export default followersSaga;
