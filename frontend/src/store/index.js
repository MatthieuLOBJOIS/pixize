import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';
import stockMiddleware from '../middlewares/stockMiddleware';
import userMiddleware from '../middlewares/userMiddlewares';

const enhancers = composeWithDevTools(
  applyMiddleware(
    stockMiddleware,
    userMiddleware
    // ... others middlewares
  )
);

const store = createStore(reducer, enhancers);

export default store;
