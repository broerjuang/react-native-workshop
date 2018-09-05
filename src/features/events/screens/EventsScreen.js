// @flow

import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {EventCard} from '../../../components/index';
import type {Event} from '../types/Event';

import {connect} from 'react-redux';

type Props = {
  navigation: {navigate: (page: string, props: Object) => {}};
  events: Array<Event>;
  userName: string;
  handleFetchEvents: (username: string) => void;
};

export class EventsScreen extends Component<Props> {
  async componentDidMount() {
    let username: string = this.props.userName;
    this.props.handleFetchEvents(username);
  }

  render() {
    let {events} = this.props;
    return (
      <ScrollView>
        {events.map((event, index) => {
          return (
            <EventCard
              key={index}
              event={event}
              navigateScreen={this._navigateScreen}
            />
          );
        })}
      </ScrollView>
    );
  }

  _navigateScreen = (type: 'REPO' | 'USER', props: Object) => {
    switch (type) {
      case 'REPO':
        this.props.navigation.navigate('RepositoryDetailScreen', props);
        break;
      case 'USER':
        this.props.navigation.navigate('ProfileScreen', props);
        break;
    }
  };
}

export function mapStateToProps(state: Object) {
  return {
    userName: state.loginReducer.currentUsers.userName,
    events: state.eventsReducer.events,
  };
}

export function mapDispatchToProps(dispatch: Function) {
  return {
    handleFetchEvents: (username: string) =>
      dispatch({type: 'FETCH_EVENTS', payload: {username}}),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventsScreen);
