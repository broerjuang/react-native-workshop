//@flow
import {takeLatest, put} from 'redux-saga/effects';
import fetchJSON from '../../../global/helpers/fetchJSON';

function* followingSaga(): Generator<*, *, *> {
  yield takeLatest('FOLLOWING_REQUESTED', fetchFollowing);
}

function* fetchFollowing(): Generator<*, *, *> {
  try {
    let following = yield fetchJSON(`user/following`, 'GET');
    console.log(following, 'following');
    yield put({
      type: 'GET_FOLLOWING_SUCCESS',
      payload: {
        followingData: following,
      },
    });
  } catch (error) {
    //eslint-disable-next-line no-console
    console.log(error);
  }
}
export default followingSaga;
