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
} from './features/notification/screens';

import UnreadScreen from './containers/UnreadScreen.container';

import {
  SearchRepositoryScreen,
  SearchUserScreen,
} from './features/search/screens';
import {ProfileScreen, SettingScreen} from './features/profile/screens';
import {
  RepositoryScreen,
  RepositoryDetailScreen,
} from './features/repository/screens/index';
import TabBarButtonGroup from './features/notification/assets/tabBarButtonGroup';

import SearchTab from './assets/SearchTab';

import renderIcon from './assets/renderIcon';

let Repository = createStackNavigator({
  RepositoryScreen: {
    screen: RepositoryScreen,
  },
  RepositoryDetailScreen: {
    screen: RepositoryDetailScreen,
  },
});

let sharedScreens = {
  EventDetail: {
    screen: EventDetail,
  },
  Repository: {
    screen: Repository,
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
    tabBarComponent: TabBarButtonGroup,
  },
);

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

let GitClient = createBottomTabNavigator(
  {
    Events: {
      screen: Events,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          renderIcon({name: 'home', size: 32, tintColor}),
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          renderIcon({name: 'bell', size: 32, tintColor}),
      },
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          renderIcon({name: 'magnify', size: 32, tintColor}),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          renderIcon({name: 'account', size: 32, tintColor}),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#000',
      inactiveTintColor: 'grey',
    },
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
