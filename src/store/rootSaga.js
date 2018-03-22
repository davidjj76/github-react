import { all } from 'redux-saga/effects';

import userSaga from '../pages/user/saga';

export default function* rootSaga() {
  yield all([
    userSaga(),
  ])
}