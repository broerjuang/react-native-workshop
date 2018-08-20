// @flow

import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {Icon} from '../../../global/core-ui/index';
import type {NavigationScreenProp} from 'react-navigation';
import fetchJSON from '../../../global/helpers/fetchJSON';

import {connect} from 'react-redux';

type Props = {
  navigation: NavigationScreenProp<[]>,
  handleClearSearch: () => {},
  handleSearchRepo: (repos: Array<Repo>) => {},
  handleSearchUser: (users: Array<User>) => {},
};

type State = {
  textInput: string,
  searchInput: string,
  selectedIndex: number,
  showClear: boolean,
};

class SearchTab extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      textInput: '',
      searchInput: '',
      selectedIndex: 0,
      showClear: false,
    };
  }

  render() {
    const buttons = ['Repositories', 'Users'];
    const {textInput, selectedIndex, showClear} = this.state;

    const {inputContainer, inputText} = styles;
    return (
      <View style={{backgroundColor: '#fff', marginTop: 20}}>
        <View style={inputContainer}>
          {textInput === '' ? (
            <TouchableOpacity onPress={this.clearSearch}>
              <Icon
                name="search"
                size={20}
                color="grey"
                type="MATERIAL_ICONS"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.clearSearch}>
              <Icon
                name="arrow-left"
                size={20}
                color="grey"
                type="MATERIAL_COMMUNITY_ICONS"
              />
            </TouchableOpacity>
          )}
          <TextInput
            style={inputText}
            value={textInput}
            onFocus={this.toggleClear}
            onBlur={this.toggleClear}
            onChangeText={this.changeInput}
            onSubmitEditing={this.changeSearch}
            returnKeyType="search"
          />
          {showClear ? (
            <TouchableOpacity onPress={this.clearInput}>
              <Icon name="clear" size={20} color="grey" type="MATERIAL_ICONS" />
            </TouchableOpacity>
          ) : null}
        </View>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
        />
      </View>
    );
  }

  updateIndex = (selectedIndex: number) => {
    this.setState({selectedIndex}, () => {
      let screen = selectedIndex === 0 ? 'Repositories' : 'Users';
      this.doSearch();
      this.props.navigation.navigate(screen);
    });
  };

  toggleClear = () => {
    this.setState({showClear: !this.state.showClear});
  };

  clearSearch = () => {
    this.setState({searchInput: ''}, () => {
      this.props.handleClearSearch();
    });
  };

  clearInput = () => {
    this.setState({textInput: ''});
  };

  changeInput = (text: string) => {
    this.setState({textInput: text});
  };

  changeSearch = () => {
    this.setState({searchInput: this.state.textInput}, () => {
      this.doSearch();
    });
  };

  doSearch = async () => {
    let {searchInput} = this.state;
    if (searchInput.trim() !== '') {
      if (this.state.selectedIndex === 0) {
        // Search Repo
        let obj = await fetchJSON(
          `search/repositories?q=${searchInput}`,
          'GET',
        );
        let {items} = obj;
        this.props.handleSearchRepo(items);
      } else {
        // Search User
        let {items} = await fetchJSON(`search/users?q=${searchInput}`, 'GET');
        this.props.handleSearchUser(items);
      }
    }
  };
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 5,
    backgroundColor: '#efefef',
  },
  inputText: {height: 40, width: '90%', backgroundColor: '#efefef'},
});

function mapStateToProps(state) {
  return {
    searchKey: state.searchReducer.searchKey,
  };
}

type Repo = {
  full_name: string,
  description: string,
  stargazers_count: number,
  forks_count: number,
  language: string,
  fork: boolean,
};
type User = {
  login: string,
  avatar_url: string,
};

function mapDispatchToProps(dispatch) {
  return {
    handleSearchRepo: (repos: Array<Repo>) =>
      dispatch({type: 'SEARCH_REPOS', payload: repos}),
    handleSearchUser: (users: Array<User>) =>
      dispatch({type: 'SEARCH_USERS', payload: users}),
    handleClearSearch: () => {
      dispatch({type: 'SEARCH_REPOS', payload: []});
      dispatch({type: 'SEARCH_USERS', payload: []});
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchTab);
