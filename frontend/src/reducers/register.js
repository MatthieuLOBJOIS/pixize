import {
	ON_CHANGE_INPUT,
	ON_CHANGE_CHECK,
	IS_SUBMIT,
	CREATED_USER,
	CLEAR_FIELD,
} from 'actions/register';

import { validateField } from 'utils/validateField';
import { alertToast } from 'utils/alertToast';

const initialState = {
	username: { value: '', status: false },
	mail: { value: '', status: false },
	password: { value: '', status: false },
	passwordConfirm: { value: '', status: false },
	check: false,
	isSubmit: false,
	userCreat: '',
};

const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case ON_CHANGE_INPUT: {
			const identifier = action.identifier;
			const value = action.data;
			const password = state.password.value;
			const status = validateField(value, identifier, password);

			return {
				...state,
				[identifier]: { value, status },
			};
		}

		case ON_CHANGE_CHECK: {
			const identifier = action.identifier;
			const value = action.data;

			return {
				...state,
				[identifier]: value,
			};
		}

		case IS_SUBMIT: {
			return {
				...state,
				isSubmit: true,
			};
		}

		case CREATED_USER: {
			alertToast(action.payload);
			return {
				...state,
				userCreat: action.payload,
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
				userCreat: '',
			};
		}

		default:
			return state;
	}
};

export default registerReducer;
