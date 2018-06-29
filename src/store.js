
/***
@Author :Abdelhamid.BELGACEM   
@ 27 Juin 2018 
@ 13:29:21 
@LANSROD GROUP
@ Mathurins 75008
***/


import { applyMiddleware, createStore,compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';

const logger = createLogger({collapsed: true});

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      epicMiddleware,
      logger,
      routerMiddleware(hashHistory),
      thunk,
    )
  )
);
