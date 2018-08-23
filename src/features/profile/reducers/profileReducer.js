// @flow

import type {ProfileAction} from '../actions/profileReducer.action';

export type Organizations = {
  name: string;
  url: string;
};

export type ProfileState = {
  userLogin: string;
  userFullName: string;
  userPicture?: string;
  sumRepositories: number;
  sumStars: number;
  sumFollowers: number;
  sumFollowing: number;
  biography?: string;
  website?: string;
  organizations?: Array<Organizations>;
};

export const initialState: ProfileState = {
  userLogin: '',
  userFullName: '',
  sumRepositories: 0,
  sumStars: 0,
  sumFollowers: 0,
  sumFollowing: 0,
  biography: '',
  website: '',
  organizations: [],
};

function profileReducer(
  state: ProfileState = initialState,
  action: ProfileAction,
) {
  switch (action.type) {
    case 'PROFILE_SUCCESS':
      return {
        ...state,
        userLogin: action.payload.login,
        userFullName: action.payload.name,
        userPicture: action.payload.avatar_url,
        sumRepositories: action.payload.public_repos,
        sumFollowers: action.payload.followers,
        sumFollowing: action.payload.following,
        sumStars: 0,
        biography: action.payload.bio,
        website: action.payload.blog,
      };
    case 'ORGANIZATION_SUCCESS':
      let orgData: Array<Organizations> = [];
      for (let i = 0; i < action.payload.length; i++) {
        let breakData: Organizations = {
          name: action.payload[i].login,
          url: action.payload[i].url,
        };
        orgData.push(breakData);
      }
      return {
        ...state,
        organizations: orgData,
      };
    case 'STAR_SUCCESS':
      return {
        ...state,
        sumStars: action.payload.length,
      };
    case 'ON_PAGE_MOUNT':
      return state;
    case 'ON_PAGE_MOUNT_ERROR':
      return {...state, message: action.payload.message};
    default:
      return state;
  }
}

export default profileReducer;
