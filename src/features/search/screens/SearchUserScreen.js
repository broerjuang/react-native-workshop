// @flow

import React from 'react';
import {Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Icon, RowWith3Column} from '../../../global/core-ui/index';
import {connect} from 'react-redux';

import type {NavigationScreenProp} from 'react-navigation';
import type {User} from '../types/index';

type Props = {
  navigation: NavigationScreenProp<[]>;
  users: Array<User>;
};

export function SearchUserScreen(props: Props) {
  const {list} = styles;
  let {users} = props;
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      {users.map((user: User, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={list}
            onPress={() => props.navigation.navigate('ProfileScreen')}
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

const styles = {
  list: {
    borderTopWidth: 1,
    borderColor: '#d6d4d4',
    paddingVertical: 6,
  },
};

type State = {
  searchReducer: {
    users: Array<User>;
  };
};

export function mapStateToProps(state: State) {
  return {
    users: state.searchReducer.users,
  };
}

export default connect(mapStateToProps)(SearchUserScreen);
