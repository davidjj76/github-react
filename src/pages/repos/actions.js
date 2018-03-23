export const FETCH_REQUEST = '@REPOS/FETCH_REQUEST';
export const FETCH_SUCCESS = '@REPOS/FETCH_SUCCESS';
export const FETCH_ERROR = '@REPOS/FETCH_ERROR';

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
