// @flow
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {RepoCard} from '../../../global/core-ui/index';
import {connect} from 'react-redux';

import type {NavigationScreenProp} from 'react-navigation';

type Repo = {
  full_name: string,
  description: string,
  stargazers_count: number,
  forks_count: number,
  language: string,
  fork: boolean,
};

type Object = {
  navigation: NavigationScreenProp<[]>,
  repos: Array<Repo>,
};

function SearchRepositoryScreen(props: Object) {
  let {repos} = props;
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      {repos.map((repo, index) => {
        return (
          <RepoCard
            key={index}
            repo={repo}
            onPress={() => props.navigation.navigate('RepositoryDetailScreen')}
          />
        );
      })}
    </ScrollView>
  );
}

function mapStateToProps(state) {
  return {
    repos: state.searchReducer.repos,
  };
}

export default connect(mapStateToProps)(SearchRepositoryScreen);
