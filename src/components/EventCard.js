// @flow
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RowWith3Column, Icon} from '../global/core-ui/index';
import {EventContent} from './index';
import type {Event} from '../features/events/types/Event';

type EventCardProps = {
  event: Event;
  navigateScreen: (type: 'REPO' | 'USER', props: Object) => void;
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
        right={renderIconType(event)}
      />
      {event.payload.comment ? (
        <Text style={textComment} numberOfLines={3}>
          {event.payload.comment.body ? event.payload.comment.body : ''}
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
export function renderIconType(event: Event) {
  let type: string = event.type;
  if (event.type === 'IssuesEvent') {
    if (event.payload.action === 'closed') {
      type = 'IssuesEventClose';
    } else if (event.payload.action === 'reopened') {
      type = 'IssuesEventReOpen';
    } else {
      type = 'IssuesEventOpen';
    }
  }
  let iconType = {
    CommitCommentEvent: 'comment-discussion',
    CreateEvent: 'git-branch',
    DeleteEvent: 'trashcan',
    ForkEvent: 'repo-forked',
    GollumEvent: 'book',
    IssueCommentEvent: 'comment-discussion',
    IssuesEventOpen: 'issue-opened',
    IssuesEventClose: 'issue-closed',
    IssuesEventReOpen: 'issue-reopened',
    MemberEvent: 'person',
    PublicEvent: 'globe',
    PullRequestEvent: 'git-pull-request',
    PullRequestReviewEvent: 'git-pull-request',
    PullRequestReviewCommentEvent: 'comment-discussion',
    PushEvent: 'git-commit',
    ReleaseEvent: 'tag',
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
