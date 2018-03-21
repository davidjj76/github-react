import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from './actions';

const user = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        data: null,
        error: null,
        loading: true,
      };

      case FETCH_SUCCESS:
      return {
        data: action.data,
        error: null,
        loading: false,
      };

    case FETCH_ERROR:
    return {
      data: null,
      error: action.error,
      loading: false,
    };

    default:
      return state;
  }
};

export default user;
