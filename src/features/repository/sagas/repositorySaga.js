import {put, all, fork, takeLatest, call} from 'redux-saga/effects';
import fetchJSON from '../../../global/helpers/fetchJSON';

//watcher
export default function* onPageInit() {
  yield takeLatest('ON_PAGE_MOUNT', fetchDataForPage);
}

//saga
export function* fetchDataForPage() {
  try {
    yield all([
      fork(requestAndPut, [repositoryRequest], repositoryRequestActionCreator),
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

const repositoryRequest = () => {
  return fetchJSON('user/repos', 'GET');
};

const repositoryRequestActionCreator = (data) => ({
  type: 'REPOSITORY_SUCCESS',
  payload: data,
});
