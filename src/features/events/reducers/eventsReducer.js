// @flow
import type {Event} from '../types/Event';

type Action = {
  type: string,
  payload?: any,
};

type State = {
  events: Array<Event>,
};

let initialState: State = {
  events: [],
};

export default function eventsReducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case 'FETCH_EVENTS': {
      return {...state, events: action.payload};
    }
    default:
      return state;
  }
}
