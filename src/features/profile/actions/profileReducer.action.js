// @flow

type Organizations = {
  name: string;
  url: string;
};

export type ProfileAction =
  | {
      type: 'PROFILE_REQUEST';
    }
  | {
      type: 'PROFILE_DOWNLOAD';
      payload: {
        login: string;
        name: string;
        public_repos: number;
        followers: number;
        following: number;
        bio: string;
        blog: string;
      };
    }
  | {
      type: 'ORGANIZATION_DOWNLOAD';
      payload: Array<*>;
    }
  | {
      type: 'STAR_DOWNLOAD';
      payload: Array<*>;
    };
