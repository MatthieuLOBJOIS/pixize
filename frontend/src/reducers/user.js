import { ON_CHANGE_INPUT, ON_CHANGE_CHECK } from 'actions/user';

const initialState = {
	username: '',
	mail: '',
	password: '',
	passwordConfirm: '',
	check: false
};

const userReducer = (state = initialState, action) => {
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
				[identifier]: value
			};
		}

		default:
			return state;
	}
};

export default userReducer;
