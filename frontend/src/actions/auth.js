// action type
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const CONNECTED_USER = 'CONNECTED_USER';
export const DISCONNECT_USER = 'DISCONNECT_USER';
export const FETCH_AUTH = 'FETCH_AUTH';
export const SET_AUTH = 'SET_AUTH';
export const ON_CHANGE_INPUT = 'ON_CHANGE_INPUT';

// action creators

export const loginUser = () => ({
	type: LOGIN_USER
});

export const logoutUser = () => ({
	type: LOGOUT_USER
});

/**
 * @param {string} payload status text response of the request api
 */

export const connectedUser = (payload) => ({
	type: CONNECTED_USER,
	payload
});

/**
 * @param {string} payload status text of the action
 */

export const disconnectUser = (payload) => ({
	type: DISCONNECT_USER,
	payload
});

export const fetchAuth = () => ({
	type: FETCH_AUTH
});

/**
 * @param {string} payload status text of the authentication
 */

export const setAuth = (payload) => ({
	type: SET_AUTH,
	payload
});

/**
 * @param {string} data value enter by the user
 * @param {string} identifier id of the input
 */

export const onChangeInput = (data, identifier) => ({
	type: ON_CHANGE_INPUT,
	data,
	identifier
});
