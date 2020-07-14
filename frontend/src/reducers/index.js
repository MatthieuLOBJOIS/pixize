import { combineReducers } from 'redux';

import user from './user';
import auth from './auth';
import register from './register';

const rootReducer = combineReducers({
	user,
	auth,
	register
	// other reducer
});

export default rootReducer;
