// @flow

export type RepositoryAction =
  | {
      type: 'STARRED_REPOSITORY_SUCCESS';
      payload: Array<*>;
    }
  | {
      type: 'ON_PAGE_MOUNT';
    }
  | {
      type: 'ON_PAGE_MOUNT_ERROR';
      payload: {message: string};
    };
