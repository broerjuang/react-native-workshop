// @flow
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesome, Octicons, Entypo} from '@expo/vector-icons';
import {DARK_GREY} from '../global/constants/colors';
import languageColor from '../global/constants/languageColor';

type Repo = {
  description: string;
  fork: boolean;
  forks: number;
  link: Function;
  id: number;
  language: string;
  name: string;
  stargazersCount: number;
};
function repoComponent(props: Repo) {
  let {
    id,
    description,
    stargazersCount,
    forks,
    language,
    fork,
    name,
    link,
  } = props;
  let langColor = languageColor.hasOwnProperty(language)
    ? languageColor[language]
    : null;
  langColor = langColor ? langColor : '#000000';
  return (
    <TouchableOpacity onPress={link}>
      <View key={id} style={styles.container}>
        <View style={styles.detail}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            {name}
          </Text>
          <Text>{description}</Text>
          <View style={styles.bottomDetail}>
            <View style={styles.logoAndText}>
              <Entypo name="star" color={DARK_GREY} style={{marginRight: 2}} />
              <Text>{Number(stargazersCount).toString()}</Text>
            </View>
            <View style={styles.logoAndText}>
              <Octicons
                name="repo-forked"
                color={DARK_GREY}
                style={{marginRight: 2}}
              />
              <Text>{Number(forks).toString()}</Text>
            </View>
            <View style={styles.logoAndText}>
              <FontAwesome
                name="circle"
                color={langColor}
                style={{marginRight: 2}}
              />
              <Text>{language}</Text>
            </View>
          </View>
        </View>
        <View style={styles.statusRepo}>
          {fork === false ? (
            <Octicons
              name="repo"
              color={DARK_GREY}
              style={{marginRight: 2, fontSize: 20}}
            />
          ) : (
            <Octicons
              name="repo-forked"
              color={DARK_GREY}
              style={{marginRight: 2, fontSize: 20}}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: DARK_GREY,
    padding: 6,
    backgroundColor: 'white',
  },
  detail: {
    flex: 6,
    flexDirection: 'column',
  },
  bottomDetail: {flexDirection: 'row', marginRight: 15, marginVertical: 3},
  logoAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  statusRepo: {flex: 1, alignItems: 'center', justifyContent: 'center'},
};

export default repoComponent;
