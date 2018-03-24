export const SET_TEXT = '@SEARCH/SET_TEXT';
export const CLEAR_TEXT = '@SEARCH/CLEAR_TEXT';

export const setText = text => ({
  type: SET_TEXT,
  text,
});

export const clearText = () => ({
  type: CLEAR_TEXT,
});
