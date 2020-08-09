import jwtDecode from 'jwt-decode';

import { TAKE_DATA_USER, UPDATE_CURRENT_USER, STATUS_VALIDATE_FIELD } from 'actions/user';

const initialState = {
	currentUser: {},
	status: {
		username: null,
		mail: null
	},
	displayAccount: false,
	displayGallery: false
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case TAKE_DATA_USER: {
			const token = localStorage.getItem('token');

			const decoded = token !== null ? jwtDecode(token) : {};

			return {
				...state,
				currentUser: decoded.userData
			};
		}

		case UPDATE_CURRENT_USER: {
			return {
				...state,
				currentUser: action.data
			};
		}

		case STATUS_VALIDATE_FIELD: {
			return {
				...state,
				status: action.payload
			};
		}

		default:
			return state;
	}
};

export default userReducer;
