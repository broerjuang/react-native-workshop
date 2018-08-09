// @flow

import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import type {NavigationScreenProp} from 'react-navigation';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

type Props = {
  navigation: NavigationScreenProp<[]>;
};
type State = {
  selectedIndex: number;
  searchInput: string;
  showClear: boolean;
};

class SearchTab extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      searchInput: '',
      showClear: false,
    };
  }

  render() {
    const buttons = ['Repositories', 'Users'];
    const {selectedIndex, searchInput, showClear} = this.state;

    const {inputContainer, inputText} = styles;
    return (
      <View style={{backgroundColor: '#fff', marginTop: 20}}>
        <View style={inputContainer}>
          {searchInput === '' ? (
            <TouchableOpacity onPress={() => this.clearInput()}>
              <MaterialIcons name="search" size={20} color="grey" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => this.clearInput()}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={20}
                color="grey"
              />
            </TouchableOpacity>
          )}
          <TextInput
            style={inputText}
            value={searchInput}
            onFocus={() => this.toggleClear()}
            onBlur={() => this.toggleClear()}
            onChangeText={(text) => this.doSearch(text)}
          />
          {showClear ? (
            <TouchableOpacity onPress={() => this.clearInput()}>
              <MaterialIcons name="clear" size={20} color="grey" />
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
      this.props.navigation.navigate(screen);
    });
  };

  toggleClear = () => {
    this.setState({showClear: !this.state.showClear});
  };

  clearInput = () => {
    this.setState({searchInput: ''});
  };

  doSearch = (text: string) => {
    this.setState({searchInput: text});
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

export default SearchTab;
