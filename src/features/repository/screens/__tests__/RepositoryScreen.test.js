// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import {RepositoryScreen} from '../RepositoryScreen';
import type {RepositoryState} from '../../reducers/repositoryReducer';

let data: RepositoryState = {
  repositoryList: [
    {
      id: 0,
      repo_name: '',
      description: '',
      star: 0,
      forked: 0,
      language: '',
      repoType: '',
    },
  ],
};
describe('Repository screee ', () => {
  it('should render Repository corectly', () => {
    let component = renderer.create(
      <RepositoryScreen
        repositoryState={data}
        handleAction={(action: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
