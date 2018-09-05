// @flow
import type {Action, Event} from '../types/Event';

type State = {
  events: Array<Event>;
};

let initialState: State = {
  events: [],
};

export default function eventsReducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case 'FETCH_EVENTS_SUCCESS': {
      return {...state, events: action.payload.events};
    }
    default:
      return state;
  }
}
