// @flow
import React from 'react';
import {View, Text} from 'react-native';
import {FontAwesome, Octicons, Entypo} from '@expo/vector-icons';
import {DARK_GREY, FACEBOOK_BLUE} from '../general/constants/colors';

type Items = {
  id: number;
  repo_name: string;
  description: string;
  star: number;
  forked: number;
  language: string;
  repoType: string;
};

function repoComponent(props: Items) {
  let {id, description, star, forked, language, repoType} = props;
  let repoName = props.repo_name;
  return (
    <View key={id} style={styles.container}>
      <View style={styles.detail}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
          }}
        >
          {repoName}
        </Text>
        <Text>{description}</Text>
        <View style={styles.bottomDetail}>
          <View style={styles.logoAndText}>
            <Entypo name="star" color={DARK_GREY} style={{marginRight: 2}} />
            <Text>{star}</Text>
          </View>
          <View style={styles.logoAndText}>
            <Octicons
              name="repo-forked"
              color={DARK_GREY}
              style={{marginRight: 2}}
            />
            <Text>{forked}</Text>
          </View>
          <View style={styles.logoAndText}>
            <FontAwesome
              name="circle"
              color={FACEBOOK_BLUE}
              style={{marginRight: 2}}
            />
            <Text>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statusRepo}>
        {repoType === 'repo' ? (
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
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    borderWidth: 0.2,
    padding: 6,
    backgroundColor: 'white',
  },
  detail: {
    flex: 5,
    flexDirection: 'column',
  },
  bottomDetail: {flexDirection: 'row', marginRight: 15, marginVertical: 3},
  logoAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  statusRepo: {flex: 2, alignItems: 'center', justifyContent: 'center'},
};

export default repoComponent;
