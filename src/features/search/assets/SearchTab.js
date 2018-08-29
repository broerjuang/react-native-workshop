// @flow

import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {Icon} from '../../../global/core-ui/index';
import type {NavigationScreenProp} from 'react-navigation';

import {connect} from 'react-redux';

type Props = {
  navigation: NavigationScreenProp<[]>;
  handleClearSearch: () => {};
  handleSearchRepo: (searchInput: string) => {};
  handleSearchUser: (searchInput: string) => {};
};

type State = {
  textInput: string;
  searchInput: string;
  selectedIndex: number;
  showClear: boolean;
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
      let {searchInput} = this.state;
      let screen = selectedIndex === 0 ? 'Repositories' : 'Users';
      if (selectedIndex === 0) {
        this.props.handleSearchRepo(searchInput);
      } else {
        this.props.handleSearchUser(searchInput);
      }
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
      let {selectedIndex, searchInput} = this.state;
      if (selectedIndex === 0) {
        this.props.handleSearchRepo(searchInput);
      } else {
        this.props.handleSearchUser(searchInput);
      }
    });
  };
}

const styles = {
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
};

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSearchRepo: (searchInput: string) =>
      dispatch({type: 'SEARCH_REPOS', payload: {searchInput}}),
    handleSearchUser: (searchInput: string) =>
      dispatch({type: 'SEARCH_USERS', payload: {searchInput}}),
    handleClearSearch: () => dispatch({type: 'CLEAR_SEARCH'}),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchTab);
