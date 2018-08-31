// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import repoComponent from '../Repo';

describe('Button', () => {
  let data = [
    {
      description: 'a',
      fork: true,
      forks: 1,
      link: () => true,
      id: 232343,
      language: 'JavaScript',
      name: 'asdfew',
      stargazersCount: 2,
    },
    {
      description: 'a',
      fork: true,
      forks: 1,
      link: () => true,
      id: 232343,
      language: '---',
      name: 'asdfew',
      stargazersCount: 2,
    },
    {
      description: 'a',
      fork: false,
      forks: 1,
      link: () => true,
      id: 232343,
      language: 'Apex',
      name: 'asdfew',
      stargazersCount: 2,
    },
  ];

  it('should render Button corectly', () => {
    let repo = repoComponent(data[0]);
    let component = renderer.create(repo);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render with wrong language', () => {
    let repo = repoComponent(data[1]);
    let component = renderer.create(repo);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render with null langColor', () => {
    let repo = repoComponent(data[2]);
    let component = renderer.create(repo);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
