import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from './actions';

const defaultState = {
  data: {
    repos: null,
  },
  error: null,
  loading: false,
};

const repos = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...defaultState,
        loading: true,
      };

    case FETCH_SUCCESS:
      return {
        ...defaultState,
        data: {
          repos: action.data,
        },
      };

    case FETCH_ERROR:
      return {
        ...defaultState,
        error: action.error,
      };

    default:
      return state;
  }
};

export default repos;
