// @flow

import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {EventCard} from '../../../components/index';

import type {NavigationScreenProp} from 'react-navigation';
import type {Event} from '../types/Event';

import {connect} from 'react-redux';

type Object = {
  navigation: NavigationScreenProp<[]>;
  events: Array<Event>;
  handleFetchEvents: (events: Array<Event>) => void;
};

class EventsScreen extends Component<Object> {
  async componentDidMount() {
    let eventList: Event = await this.fetchEvents('taylorotwell');
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

  fetchEvents = (username: string) => {
    const url = `https://api.github.com/users/${username}/received_events`;
    return fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };
}

function mapStateToProps(state) {
  return {
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
