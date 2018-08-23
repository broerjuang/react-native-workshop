import {put, all, takeLatest, fork, call} from 'redux-saga/effects';

//watcher
export default function* onPageInit() {
  console.log('on page mount');
  yield takeLatest('ON_PAGE_MOUNT', fetchDataForPage);
}

//saga
export function* fetchDataForPage() {
  const userId = 'sstur';
  try {
    yield all([
      fork(requestAndPut, [firstRequest, userId], firstRequestActionCreator),
      fork(requestAndPut, [secondRequest, userId], secondRequestActionCreator),
      fork(requestAndPut, [thirdRequest, userId], thirdRequestActionCreator),
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

const firstRequest = (userId) => {
  return fetch(`https://api.github.com/users/${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

const firstRequestActionCreator = (data) => ({
  type: 'PROFILE_SUCCESS',
  payload: data,
});

const secondRequest = (userId) => {
  return fetch(`https://api.github.com/users/${userId}/orgs`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

const secondRequestActionCreator = (data) => ({
  type: 'ORGANIZATION_SUCCESS',
  payload: data,
});

const thirdRequest = (userId) => {
  return fetch(`https://api.github.com/users/${userId}/starred`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

const thirdRequestActionCreator = (data) => ({
  type: 'STAR_SUCCESS',
  payload: data,
});
