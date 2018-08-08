import isNull from '../isNull';

it('should test null', () => {
  let test = null;
  expect(isNull(test)).toEqual(true);
  let test1 = undefined;
  expect(isNull(test1)).toEqual(true);
  let test2 = {};
  expect(isNull(test2)).toEqual(false);
});
