import jwtDecode from 'jwt-decode';

import {
	TAKE_DATA_USER,
	UPDATE_CURRENT_USER,
	STATUS_VALIDATE_FIELD,
	SET_DISPLAY_ACCOUNT,
	SET_DISPLAY_GALLERY,
} from 'actions/user';

const initialState = {
	currentUser: {},
	status: {
		username: null,
		mail: null,
	},
	displayAccount: false,
	displayGallery: true,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case TAKE_DATA_USER: {
			const token = localStorage.getItem('token');
			const decoded = jwtDecode(token);

			return {
				...state,
				currentUser: decoded.userData,
			};
		}

		case UPDATE_CURRENT_USER: {
			return {
				...state,
				currentUser: action.data,
			};
		}

		case STATUS_VALIDATE_FIELD: {
			return {
				...state,
				status: action.payload,
			};
		}

		case SET_DISPLAY_ACCOUNT: {
			let status = null;
			switch (action.payload) {
				case 'open': {
					status = true;
					break;
				}
				case 'close': {
					status = false;
					break;
				}
				default:
					status = true;
			}
			return { ...state, displayAccount: status };
		}

		default:
			return state;
	}
};

export default userReducer;
