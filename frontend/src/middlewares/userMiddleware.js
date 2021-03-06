import axios from 'axios';
import jwtDecode from 'jwt-decode';

import {
	CHANGE_CURRENT_USER,
	SAVE_NEW_CURRENT_USER,
	updateCurrentUser,
	statusValidateField,
} from 'actions/user';
import { validateField } from 'utils/validateField';
import { alertToast } from 'utils/alertToast';

const userMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case CHANGE_CURRENT_USER: {
			const identifier = action.identifier;
			const value = action.data;

			let currentUser = store.getState().user.currentUser;
			let status = store.getState().user.status;

			currentUser = {
				...currentUser,
				[identifier]: value,
			};

			status = {
				...status,
				[identifier]: validateField(value, identifier),
			};

			store.dispatch(updateCurrentUser(currentUser));
			store.dispatch(statusValidateField(status));
			break;
		}

		case SAVE_NEW_CURRENT_USER: {
			const newCurrentUser = store.getState().user.currentUser;
			const token = localStorage.getItem('token');
			const decoded = token !== null ? jwtDecode(token) : {};
			const status = store.getState().user.status;

			const statusArray = Object.values(status);
			const foundFalsy = statusArray.some((element) => element === false);
			const foundTruthy = statusArray.some((element) => element === true);

			if (
				Object.entries(newCurrentUser).toString() !==
					Object.entries(decoded.userData).toString() &&
				!foundFalsy &&
				foundTruthy
			) {
				axios({
					method: 'put',
					url: `${process.env.REACT_APP_API_URL}/api/auth/user/update`,
					data: {
						...newCurrentUser,
					},
				})
					.then((response) => {
						console.log(response);
						localStorage.setItem('token', response.data.token);
						alertToast('userUpdate');
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
