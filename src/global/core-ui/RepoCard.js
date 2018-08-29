//@flow

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from './index';
import languageColor from '../../global/constants/languageColor';

export type Repo = {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  fork: boolean;
};

type RepoCardProps = {
  repo: Repo;
  onPress: (repo: Repo) => void;
};

export default function RepoCard(props: RepoCardProps) {
  const {repo, onPress} = props;
  const {
    full_name: fullName,
    description,
    stargazers_count: stargazersCount,
    forks_count: forksCount,
    fork,
    language,
  } = repo;
  const {
    list,
    repoTitle,
    repoIconListWrapper,
    repoIconText,
    repoIconWrapper,
  } = styles;
  let langColor = languageColor.hasOwnProperty(language)
    ? languageColor[language]
    : '#000000';
  langColor = langColor ? langColor : '#000000';
  return (
    <TouchableOpacity style={list} onPress={onPress}>
      <View style={{width: '85%'}}>
        <Text style={repoTitle}>{fullName}</Text>
        {description !== '' ? <Text>{description}</Text> : null}
        <View style={repoIconListWrapper}>
          <View style={repoIconWrapper}>
            <Icon name="md-star" size={16} color="grey" type="IONICONS" />
            <Text style={repoIconText}>{stargazersCount}</Text>
          </View>
          <View style={repoIconWrapper}>
            <Icon name="repo-forked" size={16} color="grey" type="OCTICONS" />
            <Text style={repoIconText}>{forksCount}</Text>
          </View>
          <View style={repoIconWrapper}>
            <Icon
              name="circle"
              size={16}
              color={langColor}
              type="FONTAWESOME"
            />
            <Text style={repoIconText}>{language}</Text>
          </View>
        </View>
      </View>
      {fork ? (
        <Icon name="repo-forked" size={32} color="grey" type="OCTICONS" />
      ) : (
        <Icon name="repo" size={32} color="grey" type="OCTICONS" />
      )}
    </TouchableOpacity>
  );
}

const styles = {
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
    marginLeft: 2,
  },
};
