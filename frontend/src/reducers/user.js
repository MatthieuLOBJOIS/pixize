import jwtDecode from 'jwt-decode';

import { TAKE_DATA_USER, SAVE_NEW_CURRENT_USER } from 'actions/user';

const initialState = {
	currentUser: {}
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case TAKE_DATA_USER: {
			const token = localStorage.getItem('token');
			const decoded = jwtDecode(token);

			return {
				...state,
				currentUser: decoded.userData
			};
		}

		case SAVE_NEW_CURRENT_USER: {
			console.log(action.data);

			return {
				...state,
				currentUser: action.data
			};
		}

		default:
			return state;
	}
};

export default userReducer;
