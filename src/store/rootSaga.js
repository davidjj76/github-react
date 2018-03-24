import { all } from 'redux-saga/effects';

import reposSaga from '../pages/Repos/saga';
import userSaga from '../pages/User/saga';

export default function* rootSaga() {
  yield all([reposSaga(), userSaga()]);
}
