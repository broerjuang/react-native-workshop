//@flow
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import type {Event} from '../features/events/types/Event';

type EventContentProps = {
  event: Event,
  navigateScreen: (type: 'REPO' | 'USER', props: Object) => void,
};

function EventContent(props: EventContentProps) {
  let {event, navigateScreen} = props;
  let {actor, repo, created_at} = event;
  let contentProps = {};
  switch (event.type) {
    case 'CreateEvent':
      contentProps = {
        actor: actor.login,
        description: 'created',
        repoTarget: repo.name,
        created_at,
        navigateScreen,
      };
      return <TypeToContent {...contentProps} />;
    case 'DeleteEvent':
      contentProps = {
        actor: actor.login,
        description: 'deleted',
        repoTarget: repo.name,
        created_at,
        navigateScreen,
      };
      return <TypeToContent {...contentProps} />;
    case 'ForkEvent':
      contentProps = {
        actor: actor.login,
        description: 'forked',
        repoTarget: event.payload.forkee.full_name,
        repoOrigin: repo.name,
        created_at,
        navigateScreen,
      };
      return <TypeToContent {...contentProps} />;
    case 'IssueCommentEvent':
      contentProps = {
        actor: actor.login,
        description: 'commented on issue',
        title: event.payload.issue.title,
        repoTarget: repo.name,
        created_at,
        navigateScreen,
      };
      return <TypeToContent {...contentProps} />;
    case 'IssuesEvent':
      contentProps = {
        actor: actor.login,
        description: event.payload.action + ' issue',
        title: event.payload.issue.title,
        repoTarget: repo.name,
        created_at,
        navigateScreen,
      };
      return <TypeToContent {...contentProps} />;
    case 'PullRequestEvent':
      contentProps = {
        actor: actor.login,
        description: event.payload.action + ' pull request',
        title: event.payload.pull_request.title,
        repoTarget: repo.name,
        created_at,
        navigateScreen,
      };
      return <TypeToContent {...contentProps} />;
    case 'PullRequestReviewCommentEvent':
      contentProps = {
        actor: actor.login,
        description: 'commented on pull request',
        title: event.payload.pull_request.title,
        repoTarget: repo.name,
        created_at,
        navigateScreen,
      };
      return <TypeToContent {...contentProps} />;
    case 'PushEvent':
      let branchName = event.payload.ref.split('/');
      contentProps = {
        actor: actor.login,
        description: 'pushed to',
        title: branchName[2],
        repoTarget: repo.name,
        created_at,
        navigateScreen,
      };
      return <TypeToContent {...contentProps} />;
    case 'WatchEvent':
      contentProps = {
        actor: actor.login,
        description: event.payload.action + ' watching',
        repoTarget: repo.name,
        created_at,
        navigateScreen,
      };
      return <TypeToContent {...contentProps} />;
    default:
      return <Text>Type is not recognized</Text>;
  }
}

type TypeToContentProps = {
  actor: string,
  description: string,
  title?: string,
  repoTarget: string,
  repoOrigin?: string,
  created_at: string,
  navigateScreen: (type: 'REPO' | 'USER', props: Object) => void,
};

function TypeToContent(props: TypeToContentProps) {
  let {
    actor,
    description,
    title,
    repoTarget,
    repoOrigin,
    created_at,
    navigateScreen,
  } = props;
  const {textBold, textDate} = styles;
  return (
    <Text>
      <Text style={textBold} onPress={() => navigateScreen('USER', props)}>
        {actor}{' '}
      </Text>
      {description}
      {title ? (
        <Text>
          <Text style={textBold} onPress={() => navigateScreen('REPO', props)}>
            {' '}
            {title}{' '}
          </Text>
          {'at'}
        </Text>
      ) : null}

      {repoOrigin ? (
        <Text>
          <Text style={textBold} onPress={() => navigateScreen('REPO', props)}>
            {' '}
            {repoOrigin}{' '}
          </Text>
          {'at '}
        </Text>
      ) : null}

      <Text style={textBold} onPress={() => navigateScreen('REPO', props)}>
        {' '}
        {repoTarget}{' '}
      </Text>

      <Text style={textDate}>{created_at}</Text>
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
