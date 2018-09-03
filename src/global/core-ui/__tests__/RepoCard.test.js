//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import {RepoCard} from '../index';
import type {Repo} from '../RepoCard';
describe('RepoCard', () => {
  it('should render RepoCard for repo corectly', () => {
    let repo: Repo = {
      full_name: 'astridtamara/bootcamp',
      description: 'KodeFox Bootcamp',
      stargazers_count: 0,
      forks_count: 1,
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
      full_name: 'astridtamara/kfbootcamp',
      description: '',
      stargazers_count: 0,
      forks_count: 0,
      language: 'JavaScript',
      fork: true,
    };

    let component = renderer.create(
      <RepoCard repo={repo} onPress={() => {}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render RepoCard for null langColor', () => {
    let repo = {
      full_name: 'astridtamara/kfbootcamp',
      description: '',
      stargazers_count: 0,
      forks_count: 0,
      language: 'Alpine Abuild',
      fork: true,
    };

    let component = renderer.create(
      <RepoCard repo={repo} onPress={() => {}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render RepoCard for unknown language', () => {
    let repo = {
      full_name: 'astridtamara/kfbootcamp',
      description: '',
      stargazers_count: 0,
      forks_count: 0,
      language: '----',
      fork: true,
    };

    let component = renderer.create(
      <RepoCard repo={repo} onPress={() => {}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
