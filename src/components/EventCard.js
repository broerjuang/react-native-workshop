// @flow
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RowWith3Column, Icon} from '../general/core-ui/index';
import {EventContent} from './index';

type Event = {
  profilePicture: string,
  username: string,
  action: 'COMMENT_PR' | 'COMMENT_ISSUE' | 'PR' | 'ISSUE' | 'FORK',
  actionTarget: string,
  repoTarget: string,
  date: string,
  comment?: string,
};

type EventCardProps = {
  event: Event,
  openRepo: (repo: string) => void,
  openUser: (user: string) => void,
};

function EventCard(props: EventCardProps) {
  let {event, openRepo, openUser} = props;
  let {profilePicture, action, comment} = event;
  const {cardContainer, textComment} = styles;
  return (
    <View style={cardContainer}>
      <RowWith3Column
        left={
          <Image
            style={{width: 32, height: 32, borderRadius: 16}}
            source={{uri: profilePicture}}
          />
        }
        content={
          <EventContent event={event} openRepo={openRepo} openUser={openUser} />
        }
        right={renderIconAction(action)}
      />
      {comment ? (
        <Text style={textComment} numberOfLines={3}>
          {comment}
        </Text>
      ) : null}
    </View>
  );
}

function renderIconAction(action: string) {
  switch (action) {
    case 'COMMENT_PR':
      return (
        <Icon
          name="comment-discussion"
          size={24}
          color="grey"
          type="OCTICONS"
        />
      );
    case 'COMMENT_ISSUE':
      return (
        <Icon
          name="comment-discussion"
          size={24}
          color="grey"
          type="OCTICONS"
        />
      );
    case 'PR':
      return (
        <Icon name="git-pull-request" size={24} color="grey" type="OCTICONS" />
      );
    case 'ISSUE':
      return (
        <Icon name="issue-opened" size={24} color="grey" type="OCTICONS" />
      );
    case 'FORK':
      return <Icon name="repo-forked" size={24} color="grey" type="OCTICONS" />;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 0.5,
    borderColor: '#d6d4d4',
    backgroundColor: '#fff',
  },
  textComment: {
    color: 'grey',
    fontWeight: 'bold',
    paddingTop: 0,
    padding: 12,
  },
  contentCcontainer: {
    padding: 6,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textDate: {
    color: 'grey',
  },
});

export default EventCard;
