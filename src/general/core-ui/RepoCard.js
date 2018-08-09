//@flow

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Ionicons, Octicons, FontAwesome} from '@expo/vector-icons';

type Repo = {
  fullName: string,
  description: string,
  starsCount: number,
  forksCount: number,
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
    <TouchableOpacity style={list} onPress={() => onPress(repo)}>
      <View>
        <Text style={repoTitle}>{repo.fullName}</Text>
        {repo.description !== '' ? <Text>{repo.description}</Text> : null}
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
