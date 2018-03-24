export const FETCH_REQUEST = '@USER/FETCH_REQUEST';
export const FETCH_SUCCESS = '@USER/FETCH_SUCCESS';
export const FETCH_ERROR = '@USER/FETCH_ERROR';

export const fetchRequest = username => ({
  type: FETCH_REQUEST,
  username,
});

export const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  data,
});

export const fetchError = error => ({
  type: FETCH_ERROR,
  error,
});
