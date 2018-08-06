// @flow

import React, {Component} from 'react';
import RepositoryScreen from '../../repository/screens/RepositoryScreen';
class SettingScreen extends Component<{}> {
  render() {
    return <RepositoryScreen {...datas} />;
  }
}
let datas = {
  total_count: 2570,
  incomplete_results: false,
  items: [
    {
      id: 2,
      repo_name: 'react-navigation',
      description: 'Advance react native state management',
      star: 2,
      forked: 3,
      language: 'Java Script',
    },
    {
      id: 3,
      repo_name: 'Kodefox Tax',
      description: 'Kodefox daily task',
      star: 2,
      forked: 3,
      language: 'Java Script',
    },
    {
      id: 4,
      repo_name: 'reason',
      description: 'Advance react native state management',
      star: 2,
      forked: 3,
      language: 'Ocaml',
    },
  ],
};
export default SettingScreen;
