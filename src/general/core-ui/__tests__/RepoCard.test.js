import React from 'react';
import renderer from 'react-test-renderer';
import {RepoCard} from '../index';

describe('RepoCard', () => {
  it('should render RepoCard for repo corectly', () => {
    let repo = {
      fullName: 'astridtamara/bootcamp',
      description: 'KodeFox Bootcamp',
      starsCount: 0,
      forksCount: 1,
      language: 'JavaScript',
      fork: false,
    };

    let component = renderer.create(
      <RepoCard repo={repo} onPress={() => {}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render RepoCard for forked repo corectly', () => {
    let repo = {
      fullName: 'astridtamara/kfbootcamp',
      description: '',
      starsCount: 0,
      forksCount: 0,
      language: 'JavaScript',
      fork: true,
    };

    let component = renderer.create(
      <RepoCard repo={repo} onPress={() => {}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
