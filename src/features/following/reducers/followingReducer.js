// @flow

type RepositoryListAction = {
  type: 'GET_FOLLOWING_SUCCESS';
  payload: {followingData: Array<*>};
};
type InitialState = {
  followingData: Array<*>;
};
let initialState = {
  followingData: [],
};
function followingReducer(
  state: InitialState = initialState,
  action: RepositoryListAction,
) {
  switch (action.type) {
    case 'GET_FOLLOWING_SUCCESS':
      return {
        ...state,
        followingData: action.payload.followingData,
      };
    default:
      return state;
  }
}

export default followingReducer;
