import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storeSynchronize from 'redux-localstore';

import reducer from 'reducers';
import stockMiddleware from 'middlewares/stockMiddleware';
import userMiddleware from 'middlewares/userMiddleware';
import authMiddleware from 'middlewares/authMiddleware';

const enhancers = composeWithDevTools(
	applyMiddleware(
		stockMiddleware,
		userMiddleware,
		authMiddleware
		// ... others middlewares
	)
);

const store = createStore(reducer, enhancers);
storeSynchronize(store);

export default store;
