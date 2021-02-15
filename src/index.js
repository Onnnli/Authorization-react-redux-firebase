import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import { Provider } from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux'
import {rootReduce} from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './sagas/index'

const saga = createSagaMiddleware()
const store = createStore(rootReduce, compose(applyMiddleware(saga), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
saga.run(rootSaga)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


