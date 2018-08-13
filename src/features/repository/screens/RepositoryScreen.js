// @flow

import React, {Component} from 'react';
import {View} from 'react-native';
import RepoComponent from '../../../components/Repo';
import {SearchBar} from 'react-native-elements';

type Props = {
  total_count: number,
  incomplete_results: boolean,
  items: Array<Items>,
};
type Items = {
  id: number,
  repo_name: string,
  description: string,
  star: number,
  forked: number,
  language: string,
  repoType: string,
};
class RepositoryScreen extends Component<Props, {}> {
  render() {
    let {items = []} = this.props;
    return (
      <View>
        <SearchBar
          onChangeText={(text: string): void => console.log(text)}
          onClearText={() => console.log('remove')}
          placeholderTextColor={'#E1E4EC'}
          placeholder={'Type Here...'}
          icon={{
            type: 'material',
            color: '#909AA3',
            name: 'search',
            style: {alignContent: 'center'},
          }}
          inputStyle={{backgroundColor: '#E1E4EC'}}
          containerStyle={{
            backgroundColor: 'white',
            borderBottomWidth: 0.1,
            borderTopWidth: 0.5,
          }}
        />
        {items.map((item, key) => {
          return (
            <View key={key}>
              <RepoComponent {...item} />
            </View>
          );
        })}
      </View>
    );
  }
}

export default RepositoryScreen;
