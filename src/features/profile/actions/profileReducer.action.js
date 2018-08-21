// @flow

type Organizations = {
  name: string;
  url: string;
};

export type ProfileAction =
  | {
      type: 'PROFILE_SUCCESS';
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
      type: 'ORGANIZATION_SUCCESS';
      payload: Array<*>;
    }
  | {
      type: 'STAR_SUCCESS';
      payload: Array<*>;
    }
  | {
      type: 'ON_PAGE_MOUNT';
    }
  | {
      type: 'ON_PAGE_MOUNT_ERROR';
      payload: {message: string};
    };
