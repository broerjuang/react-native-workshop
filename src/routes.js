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
import {
  RepositoryScreen,
  RepositoryDetailScreen,
} from './features/repository/screens/index';

// TODO: Put back to inside RepositoryDetailScreen
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

let Repository = createStackNavigator({
  RepositoryScreen: {
    screen: RepositoryScreen,
  },
  RepositoryDetailScreen: {
    screen: RepositoryDetailScreen,
    navigationOptions: ({navigation}) => ({
      headerTransparent: true,
      headerLeft: (
        <View style={{paddingLeft: 10}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: 'white'}}>Back</Text>
          </TouchableOpacity>
        </View>
      ),
    }),
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

let RootNavigation = createSwitchNavigator({
  GitClient: {
    screen: GitClient,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
});

export default RootNavigation;
