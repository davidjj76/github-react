import { combineReducers } from 'redux';

import user from '../pages/user/reducer';
import search from '../pages/search/reducer';

const rootReducer = combineReducers({
  user,
  search,
});

export default rootReducer;
