//@flow
import {takeLatest, put} from 'redux-saga/effects';
import fetchJSON from '../../../global/helpers/fetchJSON';

function* notificationSaga(): Generator<*, *, *> {
  yield takeLatest('NOTIFICATION_REQUESTED', fetchNotification);
  yield takeLatest('MARK_NOTIFICATION_AS_READ', markNotificationAsRead);
  yield takeLatest('MARK_ALL_NOTIFICATIONS_AS_READ', markAllNotificationAsRead);
}

function* fetchNotification(): Generator<*, *, *> {
  try {
    let unread = yield fetchJSON(`notifications?all=false`, 'GET');
    let participating = yield fetchJSON(
      'notifications?participating=true',
      'GET',
    );

    let all = yield fetchJSON('notifications?all=true', 'GET');

    console.log(unread);
    yield put({
      type: 'GET_UNREAD_NOTIFICATION_SUCCESS',
      payload: {
        unreadNotificationData: unread,
      },
    });

    yield put({
      type: 'GET_PARTICIPATING_NOTIFICATION_SUCCESS',
      payload: {
        participatingNotificationData: participating,
      },
    });

    yield put({
      type: 'GET_ALL_NOTIFICATION_SUCCESS',
      payload: {
        allNotificationData: all,
      },
    });
  } catch (error) {
    //eslint-disable-next-line no-console
    console.log(error);
  }
}
export default notificationSaga;

function* markNotificationAsRead(selectedNotificationID) {
  try {
    fetchJSON(
      `notifications/threads/${selectedNotificationID.payload}`,
      'PATCH',
    );

    yield put({
      type: 'MARK_AS_READ',
      payload: {
        markedNotification: selectedNotificationID.payload,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

function* markAllNotificationAsRead() {
  try {
    fetchJSON(`notifications`, 'PUT');
    // console.log('marked as read!');
    yield put({
      type: 'MARK_ALL_AS_READ',
    });
  } catch (error) {
    console.log(error);
  }
}
