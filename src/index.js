import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './App'
import rootReducer from './pages/rootReducer';
import rootSaga from './pages/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(
  rootReducer,
  composeEnhancers(middleware),
);
 sagaMiddleware.run(rootSaga);

store.dispatch({ type: '@USER/FETCH_REQUEST', username: 'davidjj76' });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
