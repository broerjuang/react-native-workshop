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

import type {NavigationScreenProp} from 'react-navigation';

type Repo = {
  fullName: string,
  description: string,
  starsCount: number,
  forksCount: number,
  language: string,
  fork: boolean,
};

type Props = {
  navigation: NavigationScreenProp<[]>,
};

class SearchRepositoryScreen extends Component<Props> {
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

    const {
      list,
      repoTitle,
      repoIconListWrapper,
      repoIconWrapper,
      repoIconText,
    } = styles;
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        {repoList.map((repo, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={list}
              onPress={() => this._openRepo(repo)}
            >
              <View>
                <Text style={repoTitle}>{repo.fullName}</Text>
                {repo.description !== '' ? (
                  <Text>{repo.description}</Text>
                ) : null}
                <View style={repoIconListWrapper}>
                  <View style={repoIconWrapper}>
                    <Ionicons name="md-star" size={16} color="grey" />
                    <Text style={repoIconText}>{repo.starsCount}</Text>
                  </View>
                  <View style={repoIconWrapper}>
                    <Octicons name="repo-forked" size={16} color="grey" />
                    <Text style={repoIconText}>{repo.forksCount}</Text>
                  </View>
                  <View style={repoIconWrapper}>
                    <FontAwesome name="circle" size={16} color="#f9e03b" />
                    <Text style={repoIconText}>{repo.language}</Text>
                  </View>
                </View>
              </View>
              {repo.fork ? (
                <Octicons name="repo-forked" size={32} color="grey" />
              ) : (
                <Octicons name="repo" size={32} color="grey" />
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }

  _openRepo(repo: Repo) {
    this.props.navigation.navigate('RepositoryScreen');
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
  repoTitle: {
    fontWeight: 'bold',
  },
  repoIconListWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 4,
  },
  repoIconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  repoIconText: {
    fontSize: 12,
    marginLeft: 6,
  },
});

export default SearchRepositoryScreen;
