//@flow
import React from 'react';
import {Text, StyleSheet} from 'react-native';

type Event = {
  profilePicture: string,
  username: string,
  action: 'COMMENT_PR' | 'COMMENT_ISSUE' | 'PR' | 'ISSUE' | 'FORK',
  actionTarget: string,
  repoTarget: string,
  date: string,
  comment?: string,
};

type EventContentProps = {
  event: Event,
  openRepo: (repo: string) => void,
  openUser: (user: string) => void,
};

function EventContent(props: EventContentProps) {
  let {event, openRepo, openUser} = props;
  let {username, action, actionTarget, repoTarget, date} = event;
  const {contentContainer, textBold, textDate} = styles;
  let description = '';
  switch (action) {
    case 'COMMENT_PR':
      description = 'commented on pull request';
      break;
    case 'COMMENT_ISSUE':
      description = 'commented on issue';
      break;
    case 'PR':
      description = 'opened pull request';
      break;
    case 'ISSUE':
      description = 'opened issue';
      break;
    case 'FORK':
      description = 'forked';
      break;
  }
  return (
    <Text>
      <Text style={textBold} onPress={openUser}>
        {username}{' '}
      </Text>
      {description}
      <Text style={textBold} onPress={openRepo}>
        {' '}{actionTarget}{' '}
      </Text>
      at
      <Text style={textBold} onPress={openRepo}>
        {' '}{repoTarget}{' '}
      </Text>
      <Text style={textDate}>{date}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  textBold: {
    fontWeight: 'bold',
  },
  textDate: {
    color: 'grey',
  },
});

export default EventContent;
