import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchData } from './saga';

import * as actions from './actions';
import * as API from '../../services/github-api';

describe('user saga', () => {
  const action = {
    username: 'davidjj76',
  };

  describe('succesfull fetch', () => {
    const fetchDataGen = fetchData(action);
    const data = { user: 'fakeUser', orgs: 'fakeOrgs' };

    it('should call API.getUserData', () => {
      expect(fetchDataGen.next().value).toEqual(
        call(API.getUserData, action.username),
      );
    });

    it('dispatch success action', () => {
      expect(fetchDataGen.next(data).value).toEqual(
        put({ type: actions.FETCH_SUCCESS, data }),
      );
    });
  });

  describe('error fetch', () => {
    const fetchDataGen = fetchData(action);
    const error = { response: 'some error ocurred' };

    it('should call API.getUserData', () => {
      expect(fetchDataGen.next().value).toEqual(
        call(API.getUserData, action.username),
      );
    });

    it('dispatch error action', () => {
      expect(fetchDataGen.throw(error).value).toEqual(
        put({ type: actions.FETCH_ERROR, error: error.response }),
      );
    });
  });
});
