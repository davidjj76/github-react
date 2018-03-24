import { SET_TEXT, CLEAR_TEXT } from './actions';

const defaultState = '';

const search = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return action.text;

    case CLEAR_TEXT:
      return defaultState;

    default:
      return state;
  }
};

export default search;
