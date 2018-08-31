// @flow

export type LoginAction =
  | {
      type: 'ACTIONS/AUTH_GITHUB_REQUESTED' | 'ACTIONS/AUTH_GITHUB_LOGOUT';
    }
  | {
      type: 'ACTIONS/AUTH_GITHUB_SUCCED';
      payload: {
        token: string;
        currentUser: Object;
      };
    }
  | {
      type: 'ACTIONS/AUTH_GITHUB_FAILED';
      payload: {message: string};
    }
  | {
      type: 'ACTIONS/AUTH_GITHUB_SIGNOUT_SUCCED';
      payload: {message: string};
    };
