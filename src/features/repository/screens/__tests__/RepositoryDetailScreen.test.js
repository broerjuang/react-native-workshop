// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import {RepositoryDetailScreen} from '../RepositoryDetailScreen';
let datas = {
  // total_count: 2570,
  // incomplete_results: false,
  // items: [
  //   {
  //     id: 2,
  //     repo_name: 'react-navigation',
  //     description: 'Advance react native state management',
  //     star: 2,
  //     forked: 3,
  //     language: 'Java Script',
  //     repoType: 'repo',
  //   },
  //   {
  //     id: 3,
  //     repo_name: 'Kodefox Tax',
  //     description: 'Kodefox daily task',
  //     star: 2,
  //     forked: 3,
  //     language: 'Java Script',
  //     repoType: 'repo',
  //   },
  //   {
  //     id: 4,
  //     repo_name: 'reason',
  //     description: 'Advance react native state management',
  //     star: 2,
  //     forked: 3,
  //     language: 'Ocaml',
  //     repoType: 'forke',
  //   },
  // ],
  navigation: {
    navigate: (...a) => true,
    goBack: (...a) => true,
    state: {
      params: {
        fullName: 'broerjuang/react-native-workshop',
      },
    },
  },
};
describe('Repository screee ', () => {
  it('should render Repository corectly', () => {
    let component = renderer.create(<RepositoryDetailScreen {...datas} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
