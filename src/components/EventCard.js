// @flow

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {EventContent} from './index';
import {RowWith3Column, Icon} from '../general/core-ui/index';

type Event = {
  username: string,
  action: 'COMMENT_PR' | 'COMMENT_ISSUE' | 'PR' | 'ISSUE' | 'FORK',
  actionTarget: string,
  repoTarget: string,
  date: string,
};

type EventProps = {
  event: Event,
};

function eventCard(props: EventProps) {
  return (
    <View>
      <RowWith3Column />
      <Text numberOfLines={3}>Comment</Text>
    </View>
  );
}

export default eventCard;
