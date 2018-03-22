import { combineReducers } from 'redux';

import user from '../pages/user/reducer';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
