import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = applyMiddleware(sagaMiddleware);
  const store = createStore(
    rootReducer,
    composeEnhancers(middleware),
  );
   sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
