// @flow

import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Ionicons, Octicons, FontAwesome} from '@expo/vector-icons';
import RepoCard from '../../../general/core-ui/RepoCard';

import type {NavigationScreenProp} from 'react-navigation';

type Repo = {
  fullName: string,
  description: string,
  starsCount: number,
  forksCount: number,
  language: string,
  fork: boolean,
};

type Object = {
  navigation: NavigationScreenProp<[]>,
};

class SearchRepositoryScreen extends Component<Object> {
  render() {
    let repoList: Array<Repo> = [
      {
        fullName: 'astridtamara/bootcamp',
        description: 'KodeFox Bootcamp',
        starsCount: 0,
        forksCount: 1,
        language: 'JavaScript',
        fork: false,
      },
      {
        fullName: 'astridtamara/kfbootcamp',
        description: '',
        starsCount: 0,
        forksCount: 0,
        language: 'JavaScript',
        fork: true,
      },
    ];
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        {repoList.map((repo, index) => {
          return <RepoCard key={index} repo={repo} onPress={this._openRepo} />;
        })}
      </ScrollView>
    );
  }

  _openRepo(repo: Repo) {
    this.props.navigation.navigate('RepositoryScreen');
  }
}

export default SearchRepositoryScreen;
