// @flow

export type RepoFromAPI = {
  description: string;
  fork: boolean;
  forks: number;
  full_name: string; // Different
  id: number;
  language: string;
  name: string;
  stargazers_count: number; // Different
};
export type Repo = {
  description: string;
  fork: boolean;
  forks: number;
  link: Function;
  id: number;
  language: string;
  name: string;
  stargazersCount: number;
};
