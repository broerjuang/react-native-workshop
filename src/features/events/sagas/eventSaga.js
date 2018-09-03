// @flow
import {put, takeLatest, call} from 'redux-saga/effects';
import fetchJSON from '../../../global/helpers/fetchJSON';
import type {Action, Event} from '../types/Event';

//watcher
export default function* searchWatcher(): Generator<*, *, *> {
  yield takeLatest('FETCH_EVENTS', fetchEventsSaga);
}

//saga
export function* fetchEventsSaga(
  action: Action | typeof undefined,
): Generator<*, *, *> {
  if (action === undefined) {
    return;
  }
  if (action.type !== 'FETCH_EVENTS') {
    return;
  }
  try {
    const events: Array<Event> = yield call(
      fetchEvents,
      action.payload.username,
    );

    yield put({type: 'FETCH_EVENTS_SUCCESS', payload: {events}});
  } catch (e) {
    yield put({type: 'FETCH_EVENTS_ERROR', payload: {message: e}});
  }
}

const fetchEvents = (username) => {
  return fetchJSON(`users/${username}/received_events`, 'GET');
};
