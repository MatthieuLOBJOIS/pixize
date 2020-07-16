import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { CHANGE_CURRENT_USER, SAVE_NEW_CURRENT_USER, updateCurrentUser } from 'actions/user';

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
			store.dispatch(updateCurrentUser(newCurrentUser));
			break;
		}

		case SAVE_NEW_CURRENT_USER: {
			const newCurrentUser = store.getState().user.currentUser;
			const token = localStorage.getItem('token');
			const decoded = jwtDecode(token);

			if (Object.entries(newCurrentUser).toString() !== Object.entries(decoded.userData).toString()) {
				axios({
					method: 'put',
					url: `${process.env.REACT_APP_API_URL}/api/auth/user/update`,
					data: {
						...newCurrentUser
					}
				})
					.then((response) => {
						console.log(response);
						localStorage.setItem('token', response.data.token);
					})
					.catch((error) => {
						console.log(error);
					});
			}

			break;
		}

		default:
			next(action);
	}
};
export default userMiddleware;
