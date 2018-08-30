// @flow
import eventsReducer from '../reducers/eventsReducer';

describe('EventsReducer', () => {
  it('should dispatch FETCH_EVENTS_SUCCESS', () => {
    let now = new Date().toISOString();
    let newState = eventsReducer(
      {events: []},
      {
        type: 'FETCH_EVENTS_SUCCESS',
        payload: {
          events: [
            {
              type: 'PushEvent',
              actor: {
                login: 'astridtamara',
                avatar_url: '',
              },
              repo: {
                id: '9',
                name: 'astridtamara/bootcamp',
              },
              payload: {
                ref: 'test',
              },
              created_at: now,
            },
          ],
        },
      },
    );
    expect(newState).toEqual({
      events: [
        {
          type: 'PushEvent',
          actor: {
            login: 'astridtamara',
            avatar_url: '',
          },
          repo: {
            id: '9',
            name: 'astridtamara/bootcamp',
          },
          payload: {
            ref: 'test',
          },
          created_at: now,
        },
      ],
    });
  });
});
