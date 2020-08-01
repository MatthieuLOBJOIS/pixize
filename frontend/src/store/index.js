import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'reducers';

import stockMiddleware from 'middlewares/stockMiddleware';
import userMiddleware from 'middlewares/userMiddleware';
import authMiddleware from 'middlewares/authMiddleware';
import registerMiddleware from 'middlewares/registerMiddleware';
import profileMiddleware from 'middlewares/profileMiddleware';

const enhancers = composeWithDevTools(
	applyMiddleware(
		stockMiddleware,
		userMiddleware,
		authMiddleware,
		registerMiddleware,
		profileMiddleware
		// ... others middlewares
	)
);

const store = createStore(reducer, enhancers);

export default store;
