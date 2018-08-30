// @flow
import {put, takeLatest, call} from 'redux-saga/effects';
import fetchJSON from '../../../global/helpers/fetchJSON';
import type {Action} from '../types/index';

//watcher
export default function* searchWatcher(): Generator<*, *, *> {
  yield takeLatest('SEARCH_REPOS', fetchSearchRepo);
  yield takeLatest('SEARCH_USERS', fetchSearchUser);
}

//saga
export function* fetchSearchRepo(
  action: Action | typeof undefined,
): Generator<*, *, *> {
  if (action) {
    if (action.type !== 'SEARCH_REPOS') {
      return;
    }
    try {
      const {items} = yield call(searchRepos, action.payload.searchInput);
      yield put({type: 'SEARCH_REPO_SUCCESS', payload: {repos: items}});
    } catch (e) {
      yield put({type: 'SEARCH_ERROR', payload: {message: e}});
    }
  }
}

//saga
export function* fetchSearchUser(
  action: Action | typeof undefined,
): Generator<*, *, *> {
  if (action) {
    if (action.type !== 'SEARCH_USERS') {
      return;
    }
    try {
      const {items} = yield call(searchUsers, action.payload.searchInput);
      yield put({type: 'SEARCH_USER_SUCCESS', payload: {users: items}});
    } catch (e) {
      yield put({type: 'SEARCH_ERROR', payload: {message: e}});
    }
  }
}

const searchRepos = (searchInput) => {
  return fetchJSON(`search/repositories?q=${searchInput}`, 'GET');
};

const searchUsers = (searchInput) => {
  return fetchJSON(`search/users?q=${searchInput}`, 'GET');
};
