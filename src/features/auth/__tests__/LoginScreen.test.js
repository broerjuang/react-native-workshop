//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import {
  mapStateToProps,
  mapDispatchToProps,
  LoginScreen,
} from '../screens/LoginScreen';

describe('mapState To Props and Dispatch to props test for login ', () => {
  it('state into props ', () => {
    const initialState = {
      loginReducer: {
        token: 'as12313hnasnd11212',
        isLogin: true,
      },
    };
    expect(mapStateToProps(initialState)).toEqual({
      token: 'as12313hnasnd11212',
      isLogin: true,
    });
  });
  it('should render LoginScreen corectly', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).handleAction({
      type: 'ACTIONS/AUTH_GITHUB_SUCCED',
      payload: {token: 'asdadasdad'},
    });
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'ACTIONS/AUTH_GITHUB_SUCCED',
      payload: {token: 'asdadasdad'},
    });
  });
});

describe('container test', () => {
  it('should render LoginScreen corectly', () => {
    let component = renderer.create(
      <LoginScreen
        navigation={{navigate: (s) => true}}
        handleAction={(action) => {
          return;
        }}
        isLogin={false}
        token={'asdad'}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
