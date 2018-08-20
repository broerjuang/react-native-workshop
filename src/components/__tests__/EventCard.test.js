// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import {EventCard} from '../index';
import type {Event} from '../../features/events/types/Event';

describe('Icon', () => {
  it('should render EventCard corectly', () => {
    let event: Event = {
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
        comment: {
          body:
            '[Test Long Comment] The bug is bugging me a lot. Good job fixing it in such short time.' +
            '[Test Long Comment] The bug is bugging me a lot. Good job fixing it in such short time.' +
            '[Test Long Comment] The bug is bugging me a lot. Good job fixing it in such short time.' +
            '[Test Long Comment] The bug is bugging me a lot. Good job fixing it in such short time. ',
        },
      },
      created_at: '1d',
    };
    let component = renderer.create(
      <EventCard event={event} openRepo={() => {}} openUser={() => {}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
