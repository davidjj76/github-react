import anyPass from '../../utils/anyPass';

import prop from '../../utils/prop';
import { getLoading as getLoadingUser } from '../User/selectors';
import { getLoading as getLoadingRepos } from '../Repos/selectors';

export const getSearch = prop('search');
export const getSearching = anyPass([getLoadingUser, getLoadingRepos]);
