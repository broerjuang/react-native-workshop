// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import {EventCard, renderIconType} from '../index';
import type {Event} from '../../features/events/types/Event';

describe('EventCard', () => {
  it('should render EventCard with comment correctly', () => {
    let event = {
      type: 'IssueCommentEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        action: 'comment',
        issue: {
          title: 'Parallax Header bug',
        },
        comment: {},
      },
      created_at: '1d',
    };
    let component = renderer.create(
      <EventCard event={event} navigateScreen={() => {}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    event.payload.comment['body'] = 'test';
    component = renderer.create(
      <EventCard event={event} navigateScreen={() => {}} />,
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventCard of type IssuesEvent correctly', () => {
    let event = {
      type: 'IssuesEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        action: 'closed',
        issue: {
          title: 'Bug Fix',
        },
      },
      created_at: '1d',
    };
    let component = renderer.create(
      <EventCard event={event} navigateScreen={() => {}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    event.payload.action = 'reopened';
    component = renderer.create(
      <EventCard event={event} navigateScreen={() => {}} />,
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    event.payload.action = 'opened';
    component = renderer.create(
      <EventCard event={event} navigateScreen={() => {}} />,
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Icon according to Type correctly', () => {
    let now = new Date().toISOString();
    let event: Event = {
      type: 'PushEvent',
      actor: {
        login: 'astridtamara',
        avatar_url: '',
      },
      repo: {
        id: '9',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        ref: 'test',
      },
      created_at: now,
    };
    let component = renderer.create(<renderIconType event={event} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
