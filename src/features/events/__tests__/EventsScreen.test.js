// @flow
import React from 'react';
import {shallow, configure} from 'enzyme';
import renderer from 'react-test-renderer';
import {
  EventsScreen,
  mapStateToProps,
  mapDispatchToProps,
} from '../screens/EventsScreen';
import Adapter from 'enzyme-adapter-react-16';
import {EventCard} from '../../../components/index';

configure({adapter: new Adapter()});

describe('EventsScreen', () => {
  it('should render EventsScreen correctly', () => {
    let component = renderer.create(
      <EventsScreen
        navigation={{navigate: jest.fn()}}
        events={[]}
        userName="astridtamara"
        handleFetchEvents={jest.fn()}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should map state to props correctly', () => {
    let state = {
      loginReducer: {
        userName: '',
      },
      eventsReducer: {
        events: [],
      },
    };
    let result = mapStateToProps(state);
    expect(result).toEqual({userName: '', events: []});
  });

  it('should map dispatch to prop correctly', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).handleFetchEvents([]);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'FETCH_EVENTS',
      payload: {events: []},
    });
  });

  it('should call _navigateScreen and do navigation.navigate()', () => {
    const navigation = {navigate: jest.fn()};
    const wrapper = shallow(
      <EventsScreen
        navigation={navigation}
        events={[
          {
            type: 'PushEvent',
            actor: {
              login: 'astridtamara',
              avatar_url: '',
            },
            repo: {
              id: '9',
              name: 'astridtamara/bootcamp',
            },
            payload: {
              ref: 'test',
            },
            created_at: new Date().toISOString(),
          },
        ]}
        userName="astridtamara"
        handleFetchEvents={jest.fn()}
      />,
    );
    wrapper.instance()._navigateScreen('USER', {});
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
    wrapper.instance()._navigateScreen('REPO', {});
    expect(navigation.navigate).toHaveBeenCalledTimes(2);
    wrapper.instance()._navigateScreen('', {});
    expect(navigation.navigate).toHaveBeenCalledTimes(2);
  });
});
