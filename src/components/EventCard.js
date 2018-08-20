// @flow
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RowWith3Column, Icon} from '../global/core-ui/index';
import {EventContent} from './index';
import type {Event} from '../features/events/types/Event';

type EventCardProps = {
  event: Event,
  navigateScreen: (type: 'REPO' | 'USER', props: Object) => void,
};

function EventCard(props: EventCardProps) {
  let {event, navigateScreen} = props;
  let {actor, type} = event;
  const {cardContainer, textComment} = styles;
  return (
    <View style={cardContainer}>
      <RowWith3Column
        left={
          <Image
            style={{width: 32, height: 32, borderRadius: 16}}
            source={{uri: actor.avatar_url}}
          />
        }
        content={<EventContent event={event} navigateScreen={navigateScreen} />}
        right={renderIconAction(type)}
      />
      {event.payload.comment ? (
        <Text style={textComment} numberOfLines={3}>
          {event.payload.comment.body ? event.payload.comment.body : ''}
        </Text>
      ) : null}
    </View>
  );
}

function renderIconAction(type: string) {
  let iconType = {
    CreateEvent: 'plus',
    DeleteEvent: 'trashcan',
    ForkEvent: 'repo-forked',
    IssueCommentEvent: 'comment-discussion',
    IssuesEvent: 'issue-opened',
    PullRequestEvent: 'git-pull-request',
    PullRequestReviewCommentEvent: 'comment-discussion',
    PushEvent: 'git-commit',
    WatchEvent: 'eye',
  };
  return <Icon name={iconType[type]} size={24} color="grey" type="OCTICONS" />;
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 0.5,
    borderColor: '#d6d4d4',
    backgroundColor: '#fff',
  },
  textComment: {
    color: 'grey',
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
