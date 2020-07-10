import {
	ON_CHANGE_INPUT,
	ON_CHANGE_CHECK,
	IS_SUBMIT,
	CREATED_USER,
	CLEAR_FIELD,
	CONNECTED_USER,
	DISCONNECT_USER
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
	createdUser: {
		status: null
	},
	connectedUser: {
		status: null,
		message: ''
	}
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
				createdUser: {
					status: action.response
				}
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
				createdUser: {
					status: null
				}
			};
		}

		case CONNECTED_USER: {
			return {
				...state,
				connectedUser: {
					status: action.response,
					message: action.message
				}
			};
		}

		case DISCONNECT_USER: {
			return {
				...state,
				connectedUser: {
					status: 0,
					message: 'Vous avez été déconnecté avec succès, à bientôt sur Pixize !'
				}
			};
		}

		default:
			return state;
	}
};

export default userReducer;
