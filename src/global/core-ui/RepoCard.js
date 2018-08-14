//@flow

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from './index';

type Repo = {
  full_name: string,
  description: string,
  stargazers_count: number,
  forks_count: number,
  language: string,
  fork: boolean,
};

type RepoCardProps = {
  repo: Repo,
  onPress: (repo: Repo) => void,
};

export default function RepoCard(props: RepoCardProps) {
  const {repo, onPress} = props;
  const {
    list,
    repoTitle,
    repoIconListWrapper,
    repoIconText,
    repoIconWrapper,
  } = styles;
  return (
    <TouchableOpacity style={list} onPress={onPress}>
      <View style={{width: '85%'}}>
        <Text style={repoTitle}>{repo.full_name}</Text>
        {repo.description !== '' ? <Text>{repo.description}</Text> : null}
        <View style={repoIconListWrapper}>
          <View style={repoIconWrapper}>
            <Icon name="md-star" size={16} color="grey" type="IONICONS" />
            <Text style={repoIconText}>{repo.stargazers_count}</Text>
          </View>
          <View style={repoIconWrapper}>
            <Icon name="repo-forked" size={16} color="grey" type="OCTICONS" />
            <Text style={repoIconText}>{repo.forks_count}</Text>
          </View>
          <View style={repoIconWrapper}>
            <Icon name="circle" size={16} color="#f9e03b" type="FONTAWESOME" />
            <Text style={repoIconText}>{repo.language}</Text>
          </View>
        </View>
      </View>
      {repo.fork ? (
        <Icon name="repo-forked" size={32} color="grey" type="OCTICONS" />
      ) : (
        <Icon name="repo" size={32} color="grey" type="OCTICONS" />
      )}
    </TouchableOpacity>
  );
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
