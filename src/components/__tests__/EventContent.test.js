import React from 'react';
import renderer from 'react-test-renderer';
import {EventContent} from '../index';

describe('Icon', () => {
  it('should render EventContent corectly', () => {
    let event = {
      profilePicture:
        'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      username: 'zzzcielo',
      action: 'COMMENT_ISSUE',
      actionTarget: 'Parallax Header Bug',
      repoTarget: 'astridtamara/bootcamp',
      date: '1d',
      comment:
        '[Test Long Comment] The bug is bugging me a lot. Good job fixing it in such short time.' +
        '[Test Long Comment] The bug is bugging me a lot. Good job fixing it in such short time.' +
        '[Test Long Comment] The bug is bugging me a lot. Good job fixing it in such short time.' +
        '[Test Long Comment] The bug is bugging me a lot. Good job fixing it in such short time. ',
    };
    let component = renderer.create(
      <EventContent event={event} openRepo={() => {}} openUser={() => {}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
