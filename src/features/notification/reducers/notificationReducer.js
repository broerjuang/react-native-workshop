// @flow
import type {NotificationAction} from '../actions/notificationReducer.action';

export type NotificationDataType = {
  id: string;
  reposID: number;
  reposFullName: string;
  reposOwner: string;
  reposAvatar: string;
  subjectTitle: string;
  subjectURL: string;
  subjectType: string;
  isUnread: boolean;
};
export type NotificationState = {
  id: string;
  reposID: number;
  reposFullName: string;
  reposOwner: string;
  reposAvatar: string;
  subjectTitle: string;
  subjectURL: string;
  subjectType: string;
  isUnread: boolean;
  unreadNotificationData: Array<NotificationDataType>;
  participatingNotificationData: Array<NotificationDataType>;
  allNotificationData: Array<NotificationDataType>;
};
let initialState: NotificationState = {
  id: '-1',
  reposID: -1,
  reposFullName: '',
  reposOwner: '',
  reposAvatar: '',
  subjectTitle: '',
  subjectURL: '',
  subjectType: '',
  isUnread: false,
  isLoading: false,
  unreadNotificationData: [],
  participatingNotificationData: [],
  allNotificationData: [],
};

function notificationReducer(
  state: NotificationState = initialState,
  action: NotificationAction,
) {
  switch (action.type) {
    case 'NOTIFICATION_REQUESTED':
      return {
        ...state,
      };
    case 'GET_UNREAD_NOTIFICATION_SUCCESS':
      return {
        ...state,
        unreadNotificationData: action.payload.unreadNotificationData,
      };
    case 'GET_PARTICIPATING_NOTIFICATION_SUCCESS':
      return {
        ...state,
        participatingNotificationData:
          action.payload.participatingNotificationData,
      };
    case 'GET_ALL_NOTIFICATION_SUCCESS':
      return {
        ...state,
        allNotificationData: action.payload.allNotificationData,
      };
    case 'MARK_AS_READ':
      let filteredUnreadNotification;
      let payload = action.payload.markedNotification;
      console.log(`ID ${payload} marked as read!`);
      state.unreadNotificationData.map((item) => {
        if (item.id === payload) {
          filteredUnreadNotification = state.unreadNotificationData.filter(
            (data) => data !== item,
          );
        }
      });
      return {
        ...state,
        unreadNotificationData: filteredUnreadNotification,
      };
    case 'MARK_ALL_AS_READ':
      // eslint-disable-next-line no-console
      console.log('marked all as read!');
      return {
        ...state,
      };

    default:
      return state;
  }
}
export default notificationReducer;
