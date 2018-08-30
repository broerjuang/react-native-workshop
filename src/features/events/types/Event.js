// @flow
type CommitCommentEvent = {
  type: 'CommitCommentEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    action: string;
    comment: {
      body: string;
    };
  };
  created_at: string;
};

type CreateEvent = {
  type: 'CreateEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    ref_type: string;
  };
  created_at: string;
};

type DeleteEvent = {
  type: 'DeleteEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {};
  created_at: string;
};

type ForkEvent = {
  type: 'ForkEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    forkee: {
      full_name: string;
      fork: boolean;
    };
  };
  created_at: string;
};

type GollumEvent = {
  type: 'GollumEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    pages: [
      {
        action: string;
        title: string;
      },
    ];
  };
  created_at: string;
};

type IssueCommentEvent = {
  type: 'IssueCommentEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    action: string;
    issue: {
      title: string;
    };
    comment: {body: string};
  };
  created_at: string;
};

type IssuesEvent = {
  type: 'IssuesEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    action: string;
    issue: {
      title: string;
    };
  };
  created_at: string;
};

type MemberEvent = {
  type: 'MemberEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    action: string;
    member: {
      login: string;
    };
  };
  created_at: string;
};

type PublicEvent = {
  type: 'PublicEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    action: string;
  };
  created_at: string;
};

type PullRequestEvent = {
  type: 'PullRequestEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    action: string;
    pull_request: {
      title: string;
    };
  };
  created_at: string;
};

type PullRequestReviewEvent = {
  type: 'PullRequestReviewEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    action: string;
    pull_request: {
      title: string;
    };
  };
  created_at: string;
};

type PullRequestReviewCommentEvent = {
  type: 'PullRequestReviewCommentEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    action: string;
    pull_request: {
      title: string;
    };
    comment: {body: string};
  };
  created_at: string;
};

type PushEvent = {
  type: 'PushEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    ref: string;
  };
  created_at: string;
};

type ReleaseEvent = {
  type: 'ReleaseEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    action: string;
  };
  created_at: string;
};

type WatchEvent = {
  type: 'WatchEvent';
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
  };
  payload: {
    action: string;
  };
  created_at: string;
};

export type Event =
  | CommitCommentEvent
  | CreateEvent
  | DeleteEvent
  | ForkEvent
  | GollumEvent
  | IssueCommentEvent
  | IssuesEvent
  | MemberEvent
  | PublicEvent
  | PullRequestEvent
  | PullRequestReviewEvent
  | PullRequestReviewCommentEvent
  | PushEvent
  | ReleaseEvent
  | WatchEvent;

export type Action =
  | {
      type: 'FETCH_EVENTS';
      payload: {
        username: string;
      };
    }
  | {
      type: 'FETCH_EVENTS_SUCCESS';
      payload: {
        events: Array<Event>;
      };
    };
