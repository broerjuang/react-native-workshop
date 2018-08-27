// @flow

import type {RepositoryAction} from '../actions/repositoryReducer.action';

export type Items = {
  id: number;
  repo_name: string;
  description: string;
  star: number;
  forked: number;
  language: string;
  repoType: string;
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
    case 'REPOSITORY_SUCCESS':
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
          repo_name: action.payload[i].name,
          description: action.payload[i].description,
          star: action.payload[i].stargazers_count,
          forked: action.payload[i].forks_count,
          language: action.payload[i].language,
          repoType: repoType,
        };
        repoData.push(breakData);
      }
      console.log(`------------------test---------------------`);
      console.log(repoData);
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
