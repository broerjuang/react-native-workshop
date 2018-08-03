// @flow
import {
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';

import {LoginScreen} from './features/auth/screens';
import {EventsScreen, EventDetail} from './features/events/screens';
import {
  AllNotificationsScreen,
  ParticipatingScreen,
  UnreadScreen,
} from './features/notification/screens';
import {
  SearchRepositoryScreen,
  SearchUserScreen,
} from './features/search/screens';
import {ProfileScreen, SettingScreen} from './features/profile/screens';

let sharedScreens = {
  EventDetail: {
    screen: EventDetail,
  },
};

let Events = createStackNavigator({
  EventsScreen: {
    screen: EventsScreen,
  },
  ...sharedScreens,
});

let Setting = createStackNavigator({
  Setting: {
    screen: SettingScreen,
  },
});

let Profile = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
  },
  Setting: {
    screen: Setting,
  },
  ...sharedScreens,
});

let UnreadNotification = createStackNavigator({
  Unread: {
    screen: UnreadScreen,
  },
  ...sharedScreens,
});

let AllNotification = createStackNavigator({
  AllNotificationsScreen: {
    screen: AllNotificationsScreen,
  },
  ...sharedScreens,
});

let ParticipatingNotification = createStackNavigator({
  Participating: {
    screen: ParticipatingScreen,
  },
  ...sharedScreens,
});

let Notification = createMaterialTopTabNavigator({
  UnreadNotification: {
    screen: UnreadNotification,
  },
  ParticipatingNotification: {
    screen: ParticipatingNotification,
  },
  AllNotification: {
    screen: AllNotification,
  },
});

let SearchRepository = createStackNavigator({
  SearchRepositoryScreen: {
    screen: SearchRepositoryScreen,
  },
  ...sharedScreens,
});

let SearchUser = createStackNavigator({
  SearchUserScreen: {
    screen: SearchUserScreen,
  },
  ...sharedScreens,
});

let Search = createMaterialTopTabNavigator({
  SearchRepository: {
    screen: SearchRepository,
  },
  SearchUser: {
    screen: SearchUser,
  },
});

let GitClient = createBottomTabNavigator({
  Events: {
    screen: Events,
  },
  Notification: {
    screen: Notification,
  },
  Search: {
    screen: Search,
  },
  Profile: {
    screen: Profile,
  },
});

let RootNavigation = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  GitClient: {
    screen: GitClient,
  },
});

export default RootNavigation;
