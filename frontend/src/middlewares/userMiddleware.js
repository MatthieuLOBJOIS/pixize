import axios from 'axios';

import { CHANGE_CURRENT_USER, saveNewCurrentUser } from 'actions/user';

const userMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case CHANGE_CURRENT_USER: {
			const identifier = action.identifier;
			const value = action.data;
			const currentUser = store.getState().user.currentUser;
			const newCurrentUser = {
				...currentUser,
				[identifier]: value
			};
			store.dispatch(saveNewCurrentUser(newCurrentUser));
			break;
		}

		default:
			next(action);
	}
};
export default userMiddleware;
