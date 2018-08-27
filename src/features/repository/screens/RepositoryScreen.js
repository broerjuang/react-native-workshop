// @flow

import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import RepoComponent from '../../../components/Repo';
import {SearchBar} from 'react-native-elements';
import type {RepositoryState} from '../reducers/repositoryReducer';

type Props = {
  handleAction: (action: Object) => void;
  // total_count: number;
  //incomplete_results: boolean;
  repositoryState: RepositoryState;
};

type State = {};

export class RepositoryScreen extends Component<Props, State> {
  componentDidMount() {
    this.props.handleAction({type: 'ON_PAGE_MOUNT'});
  }

  render() {
    let {repositoryList = []} = this.props.repositoryState;
    return (
      <ScrollView>
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
        {repositoryList.map((item, key) => {
          return (
            <View key={key}>
              <RepoComponent {...item} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    repositoryState: state.repositoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAction: (action: Object) => dispatch(action),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryScreen);
