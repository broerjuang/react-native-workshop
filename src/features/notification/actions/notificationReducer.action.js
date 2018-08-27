// @flow

export type NotificationAction =
  | {
      type: 'NOTIFICATION_REQUESTED';
    }
  | {
      type: 'GET_UNREAD_NOTIFICATION_SUCCESS';
      payload: {
        unreadNotificationData: Array<*>;
      };
    }
  | {
      type: 'GET_PARTICIPATING_NOTIFICATION_SUCCESS';
      payload: {
        participatingNotificationData: Array<*>;
      };
    }
  | {
      type: 'GET_ALL_NOTIFICATION_SUCCESS';
      payload: {
        allNotificationData: Array<*>;
      };
    };
