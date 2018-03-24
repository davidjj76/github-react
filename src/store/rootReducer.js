import { combineReducers } from 'redux';

import repos from '../pages/repos/reducer';
import search from '../pages/Search/reducer';
import user from '../pages/user/reducer';

const rootReducer = combineReducers({
  repos,
  search,
  user,
});

export default rootReducer;
