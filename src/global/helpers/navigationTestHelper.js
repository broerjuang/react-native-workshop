// @flow

export type MockNav<T> = (state: T) => NavigationProp<T>;
export type State = {
  [string]: any;
};
function mockNavigation(state: State = {}): NavigationProp<State> {
  let navigation: NavigationProp<State> = {
    state: {
      params: state,
    },
    getParam: (...a) => {},
    goBack: (...a) => true,
    navigate: (...a) => true,
    setParams: (...a) => true,
  };
  return navigation;
}

export default mockNavigation;
