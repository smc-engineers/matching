import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from "../middlewares"

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)

export const store = createStore(
  reducers,
  enhancer,
  compose(applyMiddleware(thunk)),
  applyMiddleware(logger)
);
