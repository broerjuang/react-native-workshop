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

export type FetchFile = {
  _links: {
    git: string;
    html: string;
    self: string;
  };
  content: string;
  download_url: string;
  encoding: string;
  git_url: string;
  html_url: string;
  name: string;
  path: string;
  sha: string;
  size: string;
  type: string;
  url: string;
};
