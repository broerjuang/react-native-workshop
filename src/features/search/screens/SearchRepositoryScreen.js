// @flow
import React from 'react';
import {ScrollView} from 'react-native';
import {RepoCard} from '../../../global/core-ui/index';
import {connect} from 'react-redux';

import type {NavigationScreenProp} from 'react-navigation';
import type {Repo} from '../types/index';

type Props = {
  navigation: NavigationScreenProp<[]>;
  repos: Array<Repo>;
};

function SearchRepositoryScreen(props: Props) {
  let {repos, navigation} = props;
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      {repos
        ? repos.map((repo, index) => {
          return (
            <RepoCard
              key={index}
              repo={repo}
              onPress={() => {
                navigation.navigate('RepositoryDetailScreen');
              }}
            />
          );
        })
        : null}
    </ScrollView>
  );
}

function mapStateToProps(state) {
  return {
    repos: state.searchReducer.repos,
  };
}

export default connect(mapStateToProps)(SearchRepositoryScreen);
