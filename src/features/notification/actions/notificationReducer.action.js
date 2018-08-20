// @flow

export type NotificationAction =
  | {
      type: 'GET_UNREAD_NOTIFICATION';
      payload: Array<*>;
    }
  | {
      type: 'GET_PARTICIPATING_NOTIFICATION';
      payload: Array<*>;
    }
  | {
      type: 'GET_ALL_NOTIFICATION';
      payload: Array<*>;
    };
