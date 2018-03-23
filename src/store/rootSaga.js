import { all } from 'redux-saga/effects';

import reposSaga from '../pages/repos/saga';
import userSaga from '../pages/user/saga';

export default function* rootSaga() {
  yield all([reposSaga(), userSaga()]);
}
