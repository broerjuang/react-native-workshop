// @flow

type RepositoryListAction = {
  type: 'GET_FOLLOWERS_SUCCESS';
  payload: {followersData: Array<*>};
};
type InitialState = {
  followersData: Array<*>;
};
let initialState = {
  followersData: [],
};
function followersReducer(
  state: InitialState = initialState,
  action: RepositoryListAction,
) {
  switch (action.type) {
    case 'GET_FOLLOWERS_SUCCESS':
      return {
        ...state,
        followersData: action.payload.followersData,
      };
    default:
      return state;
  }
}

export default followersReducer;
