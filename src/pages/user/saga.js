import { call, put, takeLatest } from 'redux-saga/effects';

import * as actions from './actions'
import * as API from '../../services/github-api';

export function* fetchData(action) {
  try {
    const data = yield call(API.getUserData, action.username);
    yield put({ type: actions.FETCH_SUCCESS, data: data.user });
  } catch (error) {
    yield put({ type: actions.FETCH_ERROR, error: error.response });
  }
}

export default function* watchFetchRequest() {
  yield takeLatest(actions.FETCH_REQUEST, fetchData)
}
