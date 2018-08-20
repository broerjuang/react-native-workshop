// @flow
type forkEvent = {
  type: 'ForkEvent',
  actor: {
    login: string,
    avatar_url: string,
  },
  repo: {
    id: string,
    name: string,
  },
  payload: {
    forkee: {
      full_name: string,
      fork: boolean,
    },
  },
  created_at: string,
};

export type Event =
  | forkEvent
  | {
      type: 'WatchEvent',
      actor: {
        login: string,
        avatar_url: string,
      },
      repo: {
        id: string,
        name: string,
      },
      payload: {
        action: string,
      },
      created_at: string,
    }
  | {
      type: 'IssueCommentEvent',
      actor: {
        login: string,
        avatar_url: string,
      },
      repo: {
        id: string,
        name: string,
      },
      payload: {
        action: string,
        issue: {
          title: string,
        },
        comment: {body: string},
      },
      created_at: string,
    }
  | {
      type: 'PullRequestReviewCommentEvent',
      actor: {
        login: string,
        avatar_url: string,
      },
      repo: {
        id: string,
        name: string,
      },
      payload: {
        action: string,
        pull_request: {
          title: string,
        },
        comment: {body: string},
      },
      created_at: string,
    }
  | {
      type: 'PushEvent',
      actor: {
        login: string,
        avatar_url: string,
      },
      repo: {
        id: string,
        name: string,
      },
      payload: {
        ref: string,
      },
      created_at: string,
    }
  | {
      type: 'PullRequestEvent',
      actor: {
        login: string,
        avatar_url: string,
      },
      repo: {
        id: string,
        name: string,
      },
      payload: {
        action: string,
        pull_request: {
          title: string,
        },
      },
      created_at: string,
    }
  | {
      type: 'IssuesEvent',
      actor: {
        login: string,
        avatar_url: string,
      },
      repo: {
        id: string,
        name: string,
      },
      payload: {
        action: string,
        issue: {
          title: string,
        },
      },
      created_at: string,
    }
  | {
      type: 'CreateEvent',
      actor: {
        login: string,
        avatar_url: string,
      },
      repo: {
        id: string,
        name: string,
      },
      payload: {
        ref_type: string,
      },
      created_at: string,
    };
