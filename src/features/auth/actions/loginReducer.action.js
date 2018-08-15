// @flow

export type LoginAction =
  | {
      type: 'LOGIN_REQUEST' | 'LOGIN_FAILED';
    }
  | {
      type: 'LOGIN_SUCCESS';
      payload: {
        token: string;
      };
    };
