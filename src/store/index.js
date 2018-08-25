import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter } from 'connected-react-router';
import rootReducer from '../reducers';
import history from './history';
import enhancers from './enhancers';
import middlewares from './middlewares';

const initialState = {};

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers,
);

export default store;
