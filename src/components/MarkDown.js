// @flow

import React from 'react';
import {StyleSheet} from 'react-native';
import Markdown, {styles} from 'react-native-markdown-renderer';
type Props = {
  content: string;
};
function markDown(props: Props) {
  let {content} = props;
  return <Markdown style={styles}>{content}</Markdown>;
}

export default markDown;

const syles = StyleSheet.create({
  heading: {
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  heading1: {
    fontSize: 32,
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },
  heading2: {
    fontSize: 24,
  },
  heading3: {
    fontSize: 18,
  },
  heading4: {
    fontSize: 16,
  },
  heading5: {
    fontSize: 13,
  },
  heading6: {
    fontSize: 11,
  },
});
