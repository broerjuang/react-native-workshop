// @flow

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import type {NavigationScreenProp} from 'react-navigation';

type User = {
  fullName: string,
  profilePicture: string,
};

type Object = {
  navigation: NavigationScreenProp<[]>,
};

class SearchUserScreen extends Component<Object> {
  render() {
    const {list, userWrapper, username} = styles;
    let userList: Array<User> = [
      {
        fullName: 'astridtamara',
        profilePicture:
          'https://d2kwjcq8j5htsz.cloudfront.net/2016/08/16153058/hamster-health-center-2.jpg',
      },
      {
        fullName: 'zzzcielo',
        profilePicture:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
    ];
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        {userList.map((user, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={list}
              onPress={() => this._openUser(user)}
            >
              <View style={userWrapper}>
                <Image
                  style={{width: 32, height: 32, borderRadius: 16}}
                  source={{uri: user.profilePicture}}
                />
                <Text style={username}>{user.fullName}</Text>
              </View>
              <FontAwesome name="angle-right" size={24} color="grey" />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }

  _openUser(user: User) {
    this.props.navigation.navigate('ProfileScreen');
  }
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#d6d4d4',
    padding: 12,
  },
  userWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    marginLeft: 10,
  },
});

export default SearchUserScreen;
