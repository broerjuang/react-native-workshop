// @flow

import {
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
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
import {RepositoryScreen} from './features/repository/screens';

import SearchTab from './assets/SearchTab';

let sharedScreens = {
  EventDetail: {
    screen: EventDetail,
  },
  RepositoryScreen: {
    screen: RepositoryScreen,
    title: 'Repository',
  },
  ProfileScreen: {
    screen: ProfileScreen,
    title: 'Profile',
  },
};

let Events = createStackNavigator({
  EventsScreen: {
    screen: EventsScreen,
    navigationOptions: {
      title: 'events',
    },
  },
  ...sharedScreens,
});

let Setting = createStackNavigator({
  Setting: {
    screen: SettingScreen,
  },
});

let Profile = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Nah',
        header: null,
      },
    },
    Setting: {
      screen: Setting,
    },
    ...sharedScreens,
  },
  {
    headerMode: 'none',
  }
);

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

let Search = createMaterialTopTabNavigator(
  {
    Repositories: {
      screen: SearchRepositoryScreen,
      navigationOptions: {
        header: null,
      },
    },
    Users: {
      screen: SearchUserScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    tabBarComponent: SearchTab,
    animationEnabled: false,
  },
);

let SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      header: null,
    },
  },
  ...sharedScreens,
});

let GitClient = createBottomTabNavigator({
  Events: {
    screen: Events,
  },
  Notification: {
    screen: Notification,
  },
  Search: {
    screen: SearchStack,
  },
  Profile: {
    screen: Profile,
  },
});

let RootNavigation = createSwitchNavigator({
  GitClient: {
    screen: GitClient,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
});

export default RootNavigation;
