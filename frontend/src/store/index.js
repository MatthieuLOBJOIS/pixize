import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';
import stockMiddleware from '../middlewares/stockMiddleware'

const enhancers = composeWithDevTools(
	applyMiddleware(
		stockMiddleware
		// ... others middlewares
	)
);

const store = createStore(reducer, enhancers);

export default store;