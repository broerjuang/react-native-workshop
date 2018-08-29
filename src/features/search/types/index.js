// @flow

export type Action =
  | {
      type: 'SEARCH_REPOS';
      payload: {repos: Array<Repo>};
    }
  | {
      type: 'SEARCH_USERS';
      payload: {users: Array<User>};
    }
  | {
      type: 'CLEAR_SEARCH';
    };

export type Repo = {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  fork: boolean;
};
export type User = {
  login: string;
  avatar_url: string;
};

export type State = {
  repos: Array<Repo>;
  users: Array<User>;
};
