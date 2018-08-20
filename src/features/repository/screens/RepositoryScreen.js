// @flow

import React, {Component} from 'react';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import RepoComponent from '../../../components/Repo';
import {SearchBar} from 'react-native-elements';
import fetchJSON from '../../../global/helpers/fetchJSON';
import Icon from '../../../global/core-ui/Icon';
type Props = {
  // total_count: number;
  // incomplete_results: boolean;
  // items: Array<Items>;
  navigation: Object;
};
type RepoFromAPI = {
  description: string;
  fork: boolean;
  forks: number;
  full_name: string; // Different
  id: number;
  language: string;
  name: string;
  stargazers_count: number; // Different
};
type Repo = {
  description: string;
  fork: boolean;
  forks: number;
  link: Function;
  id: number;
  language: string;
  name: string;
  stargazersCount: number;
};
type State = {
  items: Array<Repo>;
  search: string;
};
class RepositoryScreen extends Component<Props, State> {
  static navigationOptions = (options: *) => ({
    headerLeft: (
      <View style={{paddingLeft: 10}}>
        <TouchableOpacity
          onPress={() => {
            options.navigation.goBack(null);
          }}
        >
          <Icon
            name={'arrow-back'}
            size={30}
            color={'black'}
            type={'MATERIAL_ICONS'}
          />
        </TouchableOpacity>
      </View>
    ),
    headerTitle: (
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Repositories</Text>
    ),
  });
  state = {
    items: [],
    search: '',
  };
  async componentDidMount() {
    let url = '';
    if (this.props.navigation.state.params) {
      if (this.props.navigation.state.params.username != null) {
        url = `users/${
          this.props.navigation.state.params.username
        }/repos?sort=created`;
      }
    }
    if (url === '') {
      url = 'user/repos?affiliation=owner&sort=created';
    }
    let repoList: Array<RepoFromAPI> = await fetchJSON(url, 'GET');
    let repos = [];
    repoList.map((repo) => {
      let {
        id,
        name,
        description,
        forks,
        fork,
        full_name,
        language,
        stargazers_count,
      } = repo;
      repos.push({
        id,
        name,
        description,
        fork,
        forks,
        link: () => {
          this.props.navigation.navigate('RepositoryDetailScreen', {
            fullName: full_name,
          });
        },
        language,
        stargazersCount: stargazers_count,
      });
    });
    this.setState({items: repos});
  }
  render() {
    let {items = [], search} = this.state;
    let showItems = [];
    if (search !== '') {
      items.forEach((item) => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          showItems.push(item);
        }
      });
    } else {
      showItems = items;
    }
    return (
      <View style={{flex: 1}}>
        <SearchBar
          onChangeText={(text: string): void => this.setState({search: text})}
          onClearText={() => this.setState({search: ''})}
          value={this.state.search}
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
        <ScrollView>
          {showItems.map((item, key) => {
            return (
              <View key={key}>
                <RepoComponent {...item} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default RepositoryScreen;
