// @flow

type IsNull = (mixed) => boolean;

let isNull: IsNull = (obj) => {
  let result: boolean =
    obj && obj !== 'null' && obj !== 'undefined' && obj !== {} ? false : true;
  return result;
};
export default isNull;
