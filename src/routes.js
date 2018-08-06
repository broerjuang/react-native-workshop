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
import tabBarButtonGroup from './features/notification/assets/tabBarButtonGroup';

let sharedScreens = {
  EventDetail: {
    screen: EventDetail,
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
  },
);

let UnreadNotification = createStackNavigator(
  {
    Unread: {
      screen: UnreadScreen,
    },
    ...sharedScreens,
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

let AllNotification = createStackNavigator(
  {
    AllNotificationsScreen: {
      screen: AllNotificationsScreen,
    },
    ...sharedScreens,
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

let ParticipatingNotification = createStackNavigator(
  {
    Participating: {
      screen: ParticipatingScreen,
    },
    ...sharedScreens,
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

let Notification = createMaterialTopTabNavigator(
  {
    Unread: {
      screen: UnreadNotification,
    },
    Participating: {
      screen: ParticipatingNotification,
    },
    All: {
      screen: AllNotification,
    },
  },
  {
    tabBarComponent: tabBarButtonGroup,
  },
);

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

let GitClient = createBottomTabNavigator(
  {
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
  },
  // delete later v
  {
    initialRouteName: 'Notification',
  },
);

let RootNavigation = createSwitchNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    GitClient: {
      screen: GitClient,
    },
  },
  {
    initialRouteName: 'GitClient',
  },
);

export default RootNavigation;
