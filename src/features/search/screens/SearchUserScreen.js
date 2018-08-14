// @flow

import React, {Component} from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {RowWith3Column, Icon} from '../../../global/core-ui/index';
import {connect} from 'react-redux';

import type {NavigationScreenProp} from 'react-navigation';

type User = {
  login: string,
  avatar_url: string,
};

type Object = {
  navigation: NavigationScreenProp<[]>,
  users: Array<User>,
};

class SearchUserScreen extends Component<Object> {
  render() {
    const {list} = styles;
    let {users} = this.props;
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        {users.map((user, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={list}
              onPress={() => this._openUser(user)}
            >
              <RowWith3Column
                left={
                  <Image
                    style={{width: 32, height: 32, borderRadius: 16}}
                    source={{uri: user.avatar_url}}
                  />
                }
                content={<Text>{user.login}</Text>}
                right={
                  <Icon
                    name="angle-right"
                    size={24}
                    color="grey"
                    type="FONTAWESOME"
                  />
                }
              />
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
    borderTopWidth: 1,
    borderColor: '#d6d4d4',
    paddingVertical: 6,
  },
});

function mapStateToProps(state) {
  return {
    users: state.searchReducer.users,
  };
}

export default connect(mapStateToProps)(SearchUserScreen);
