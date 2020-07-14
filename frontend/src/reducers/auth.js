import { CONNECTED_USER, DISCONNECT_USER, SET_AUTH, ON_CHANGE_INPUT } from 'actions/auth';

const initialState = {
	userAuth: '',
	mail: '',
	password: ''
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
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

		case SET_AUTH: {
			console.log(action.payload);
			return {
				...state,
				userAuth: action.payload
			};
		}

		case ON_CHANGE_INPUT: {
			const identifier = action.identifier;

			return {
				...state,
				[identifier]: action.data
			};
		}

		default:
			return state;
	}
};

export default authReducer;
