// @flow

import type {RepositoryAction} from '../actions/starReducer.action';

export type Items = {
  id: number;
  name: string;
  description: string;
  stargazersCount: number;
  forked: number;
  language: string;
  repoType: string;
  link: string;
};

export type RepositoryState = {
  repositoryList?: Array<Items>;
};

export const initialState: RepositoryState = {
  repositoryList: [],
};

function repositoryReducer(
  state: RepositoryState = initialState,
  action: RepositoryAction,
) {
  switch (action.type) {
    case 'STARRED_REPOSITORY_SUCCESS':
      let repoData: Array<Items> = [];
      for (let i = 0; i < action.payload.length; i++) {
        let repoType: string;
        if (action.payload[i].fork === false) {
          repoType = 'repo-forked';
        } else {
          repoType = 'repo';
        }
        let breakData: Items = {
          id: action.payload[i].id,
          name: action.payload[i].name,
          description: action.payload[i].description,
          stargazersCount: action.payload[i].stargazers_count,
          forked: action.payload[i].forks_count,
          language: action.payload[i].language,
          link: action.payload[i].url,
          repoType: repoType,
        };
        repoData.push(breakData);
      }
      return {
        ...state,
        repositoryList: repoData,
      };
    case 'ON_PAGE_MOUNT':
      return state;
    case 'ON_PAGE_MOUNT_ERROR':
      return {...state, message: action.payload.message};
    default:
      return state;
  }
}

export default repositoryReducer;
