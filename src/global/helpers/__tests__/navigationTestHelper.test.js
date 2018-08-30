// @flow
import navigation from '../navigationTestHelper';

it('should make mockNavigation with {}', () => {
  // Initialize mockstore with empty state
  let data = navigation({});

  expect(data.state.params).toEqual({});
  expect(data.getParam('')).toEqual(undefined);
  expect(data.goBack('')).toEqual(true);
  expect(data.navigate('')).toEqual(true);
  expect(data.setParams({a: 'a'})).toEqual(true);
});
it(`should make mockNavigation with {a:'a'}`, () => {
  // Initialize mockstore with empty state
  let mock = {a: 'a'};
  let data = navigation(mock);

  expect(data.state.params).toEqual(mock);
  expect(data.getParam('')).toEqual(undefined);
  expect(data.goBack('')).toEqual(true);
  expect(data.navigate('')).toEqual(true);
  expect(data.setParams({a: 'a'})).toEqual(true);
});
it(`should make mockNavigation`, () => {
  // Initialize mockstore with empty state
  let data = navigation;
  expect(data).toEqual(navigation);
});
