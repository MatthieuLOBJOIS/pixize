import { combineReducers } from 'redux';

import user from './user';
import auth from './auth';
import register from './register';
import profile from './profile';

const rootReducer = combineReducers({
	user,
	auth,
	register,
	profile
	// other reducer
});

export default rootReducer;
