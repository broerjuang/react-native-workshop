// @flow

type InitialState = {
  userLogin: '';
  userFullName: '';
  sumRepositories: number;
  sumStars: number;
  sumFollowers: number;
  sumFollowing: number;
  biography?: string;
  website?: string;
  organizations?: Array<Organizations>;
};

type Organizations = {
  name: string;
  url: string;
};

type Action = {
  type: 'PROFILE_REQUEST';
};

let initialState: InitialState = {
  userLogin: '',
  userFullName: '',
  sumRepositories: 0,
  sumStars: 0,
  sumFollowers: 0,
  sumFollowing: 0,
  biography: 'No Biography Found',
  website: 'No Website Found',
  organizations: [],
};

function profileReducer(state: InitialState = initialState, action: Action) {
  switch (action.type) {
    case 'PROFILE_REQUEST':
      return {...state, isLogin: true, token: action.payload.token};
    default:
      return state;
  }
}

export default profileReducer;
