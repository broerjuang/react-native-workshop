// @flow
import React from 'react';
import {Text} from 'react-native';
import {shallow, configure} from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import {EventContent, TypeToContent} from '../index';
import type {Event} from '../../features/events/types/Event';

configure({adapter: new Adapter()});

describe('EventContent', () => {
  let now = new Date().toISOString();

  it('should render EventContent corectly', () => {
    let event = {
      type: 'test',
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of CommitCommentEvent corectly', () => {
    let event = {
      type: 'CommitCommentEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        action: 'comment',
        issue: {
          title: 'Parallax Header bug',
        },
        comment: {
          body: 'Test',
        },
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of CreateEvent corectly', () => {
    let event = {
      type: 'CreateEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        ref_type: '',
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of DeleteEvent corectly', () => {
    let event = {
      type: 'DeleteEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {},
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of ForkEvent corectly', () => {
    let event = {
      type: 'ForkEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        forkee: {
          full_name: 'Test',
          fork: true,
        },
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of GollumEvent corectly', () => {
    let event = {
      type: 'GollumEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        pages: [
          {
            action: 'created',
            title: 'Test',
          },
        ],
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of IssueCommentEvent corectly', () => {
    let event = {
      type: 'IssueCommentEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        action: 'comment',
        issue: {
          title: 'Parallax Header bug',
        },
        comment: {
          body: 'Test',
        },
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of IssuesEvent corectly', () => {
    let event = {
      type: 'IssuesEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        action: 'opened',
        issue: {
          title: 'Test',
        },
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of MemberEvent corectly', () => {
    let event = {
      type: 'MemberEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        action: 'opened',
        member: {
          login: 'Test',
        },
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of PublicEvent corectly', () => {
    let event = {
      type: 'PublicEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        action: '',
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of PullRequestEvent corectly', () => {
    let event = {
      type: 'PullRequestEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        action: 'opened',
        pull_request: {
          title: 'Test',
        },
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of PullRequestReviewEvent corectly', () => {
    let event = {
      type: 'PullRequestReviewEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        action: 'opened',
        pull_request: {
          title: 'Test',
        },
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of PullRequestReviewCommentEvent corectly', () => {
    let event = {
      type: 'PullRequestReviewCommentEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        action: 'opened',
        pull_request: {
          title: 'Test',
        },
        comment: {
          body: 'test',
        },
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of PushEvent corectly', () => {
    let event = {
      type: 'PushEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        ref: 'test',
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of ReleaseEvent corectly', () => {
    let event = {
      type: 'ReleaseEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        action: 'test',
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EventContent of WatchEvent corectly', () => {
    let event = {
      type: 'WatchEvent',
      actor: {
        login: 'zzzcielo',
        avatar_url:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
      },
      repo: {
        id: '123',
        name: 'astridtamara/bootcamp',
      },
      payload: {
        action: 'test',
      },
      created_at: now,
    };
    let component = renderer.create(
      <EventContent
        event={event}
        navigateScreen={(type: 'REPO' | 'USER', props: Object) => {}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
