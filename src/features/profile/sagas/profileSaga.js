// @flow

import {put, all, takeLatest, fork, call} from 'redux-saga/effects';
import fetchJSON from '../../../global/helpers/fetchJSON';

//watcher
export default function* onPageInit(): Generator<*, *, *> {
  yield takeLatest('ON_PAGE_MOUNT', fetchDataForPage);
}

//saga
export function* fetchDataForPage(): Generator<*, *, *> {
  try {
    yield all([
      fork(requestAndPut, [firstRequest], firstRequestActionCreator),
      fork(requestAndPut, [secondRequest], secondRequestActionCreator),
      fork(requestAndPut, [thirdRequest], thirdRequestActionCreator),
    ]);
  } catch (e) {
    yield put({type: 'ON_PAGE_MOUNT_ERROR', payload: {message: e}});
  }
}

//helper
function* requestAndPut(requestParameters, actionCreator) {
  const result = yield call(...requestParameters);
  yield put(actionCreator(result));
}

const firstRequest = () => {
  return fetchJSON('user', 'GET');
};

const firstRequestActionCreator = (data) => ({
  type: 'PROFILE_SUCCESS',
  payload: data,
});

const secondRequest = () => {
  return fetchJSON('user/orgs', 'GET');
};

const secondRequestActionCreator = (data) => ({
  type: 'ORGANIZATION_SUCCESS',
  payload: data,
});

const thirdRequest = () => {
  return fetchJSON('user/starred', 'GET');
};

const thirdRequestActionCreator = (data) => ({
  type: 'STAR_SUCCESS',
  payload: data,
});
