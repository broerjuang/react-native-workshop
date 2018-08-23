// @flow

import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {EventCard} from '../../../components/index';
import fetchJSON from '../../../global/helpers/fetchJSON';

import type {NavigationScreenProp} from 'react-navigation';
import type {Event} from '../types/Event';

import {connect} from 'react-redux';

type Props = {
  navigation: NavigationScreenProp<[]>;
  events: Array<Event>;
  userName: string;
  handleFetchEvents: (events: Array<Event>) => void;
};

class EventsScreen extends Component<Props> {
  async componentDidMount() {
    let username: string = this.props.userName;
    let eventList: Array<Event> = await fetchJSON(
      `users/${username}/received_events`,
      'GET',
    );
    this.props.handleFetchEvents(eventList);
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

function mapStateToProps(state) {
  return {
    userName: state.loginReducer.userName,
    events: state.eventsReducer.events,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleFetchEvents: (events: Array<Event>) =>
      dispatch({type: 'FETCH_EVENTS', payload: events}),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventsScreen);
