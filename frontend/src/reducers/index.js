import { combineReducers } from 'redux';

import user from './user';
import auth from './auth';
import register from './register';
import profile from './profile';
import stock from './stock';

const rootReducer = combineReducers({
	user,
	auth,
	register,
	profile,
	stock,
	// other reducer
});

export default rootReducer;
