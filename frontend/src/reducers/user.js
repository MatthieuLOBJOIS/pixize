import jwtDecode from 'jwt-decode';

import {
	ON_CHANGE_INPUT,
	ON_CHANGE_CHECK,
	IS_SUBMIT,
	CREATED_USER,
	CLEAR_FIELD,
	CONNECTED_USER,
	DISCONNECT_USER,
	TAKE_DATA_USER,
	SAVE_NEW_CURRENT_USER,
	SET_AUTH
} from 'actions/user';
import { validateField } from 'utils/validateField';
import { defineState } from 'redux-localstore';

const initialState = {
	username: { value: '', status: false },
	mail: { value: '', status: false },
	password: { value: '', status: false },
	passwordConfirm: { value: '', status: false },
	check: false,
	isSubmit: false,
	currentUser: {},
	alertToast: {},
	userAuth: '',
	userCreat: ''
};

const userReducer = (state = defineState(initialState)('User'), action) => {
	switch (action.type) {
		case ON_CHANGE_INPUT: {
			const identifier = action.identifier;
			const value = action.data;
			const password = state.password.value;
			const status = validateField(value, identifier, password);

			return {
				...state,
				[identifier]: { value, status }
			};
		}

		case ON_CHANGE_CHECK: {
			const identifier = action.identifier;
			const value = action.data;

			return {
				...state,
				[identifier]: value
			};
		}

		case IS_SUBMIT: {
			return {
				...state,
				isSubmit: true
			};
		}

		case CREATED_USER: {
			return {
				...state,
				userCreat: action.payload
			};
		}

		case CLEAR_FIELD: {
			return {
				...state,
				username: { value: '', status: false },
				mail: { value: '', status: false },
				password: { value: '', status: false },
				passwordConfirm: { value: '', status: false },
				check: false,
				isSubmit: false,
				userCreat: ''
			};
		}

		case CONNECTED_USER: {
			localStorage.setItem('auth', action.payload);
			return {
				...state,
				userAuth: action.payload
			};
		}

		case DISCONNECT_USER: {
			return {
				...state,
				userAuth: action.payload
			};
		}

		case TAKE_DATA_USER: {
			const token = localStorage.getItem('token');
			const decoded = jwtDecode(token);

			return {
				...state,
				currentUser: decoded.userData
			};
		}

		case SAVE_NEW_CURRENT_USER: {
			localStorage.setItem('token', action.data);
			return {
				...state,
				currentUser: action.data
			};
		}

		case SET_AUTH: {
			console.log(action.payload);
			return {
				...state,
				userAuth: action.payload
			};
		}

		default:
			return state;
	}
};

export default userReducer;
