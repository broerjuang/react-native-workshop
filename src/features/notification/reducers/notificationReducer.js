// @flow
import type {NotificationAction} from '../actions/notificationReducer.action';

export type NotificationDataType = {
  id: number;
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
  id: number;
  reposID: number;
  reposFullName: string;
  reposOwner: string;
  reposAvatar: string;
  subjectTitle: string;
  subjectURL: string;
  subjectType: string;
  isUnread: boolean;
  unreadNotificationData?: Array<NotificationDataType>;
  participatingNotificationData?: Array<NotificationDataType>;
  allNotificationData?: Array<NotificationDataType>;
};
let initialState: NotificationState = {
  id: -1,
  reposID: -1,
  reposFullName: '',
  reposOwner: '',
  reposAvatar: '',
  subjectTitle: '',
  subjectURL: '',
  subjectType: '',
  isUnread: false,
  unreadNotificationData: [],
  participatingNotificationData: [],
  allNotificationData: [],
};

function notificationReducer(
  state: NotificationState = initialState,
  action: NotificationAction,
) {
  switch (action.type) {
    case 'GET_UNREAD_NOTIFICATION':
      let unreadNotifications = [];

      for (let item of action.payload) {
        let newNotif = {
          id: item.id,
          reposID: item.repository.id,
          reposFullName: item.repository.full_name,
          reposOwner: item.repository.owner.login,
          reposAvatar: item.repository.owner.avatar_url,
          subjectTitle: item.subject.title,
          subjectURL: item.subject.url,
          subjectType: item.subject.type,
          isUnread: item.unread,
        };
        unreadNotifications.push(newNotif);
      }

      return {
        ...state,
        unreadNotificationData: unreadNotifications,
      };
    case 'GET_PARTICIPATING_NOTIFICATION':
      let participatingNotifications = [];
      for (let item of action.payload) {
        let newNotif = {
          id: item.id,
          reposID: item.repository.id,
          reposFullName: item.repository.full_name,
          reposOwner: item.repository.owner.login,
          reposAvatar: item.repository.owner.avatar_url,
          subjectTitle: item.subject.title,
          subjectURL: item.subject.url,
          subjectType: item.subject.type,
          isUnread: item.unread,
        };
        participatingNotifications.push(newNotif);
      }

      return {
        ...state,
        participatingNotificationData: participatingNotifications,
      };

    case 'GET_ALL_NOTIFICATION':
      let allNotifications = [];
      for (let item of action.payload) {
        let newNotif = {
          id: item.id,
          reposID: item.repository.id,
          reposFullName: item.repository.full_name,
          reposOwner: item.repository.owner.login,
          reposAvatar: item.repository.owner.avatar_url,
          subjectTitle: item.subject.title,
          subjectURL: item.subject.url,
          subjectType: item.subject.type,
          isUnread: item.unread,
        };
        allNotifications.push(newNotif);
      }
      return {
        ...state,
        allNotificationData: allNotifications,
      };
    case 'MARK_AS_READ':
      console.log('marked as read!', action.payload);
      return {
        ...state,
      };
    case 'MARK_ALL_AS_READ':
      console.log('marked all as read!');
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default notificationReducer;
