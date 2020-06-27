// action type
export const ON_CHANGE_INPUT = 'ON_CHANGE_INPUT';
export const ON_CHANGE_CHECK = 'ON_CHANGE_CHECK';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const IS_SUBMIT = 'IS_SUBMIT';
export const CREATED_USER = 'CREATED_USER';
export const CONNECTED_USER = 'CONNECTED_USER';
export const CLEAR_FIELD = 'CLEAR_FIELD';

// action creators

/**
 * @param {string} data value enter by the user
 * @param {string} identifier id of the input
 */

export const onChangeInput = (data, identifier) => ({
	type: ON_CHANGE_INPUT,
	data,
	identifier
});

/**
 * @param {boolean} data user check or uncheck the checkbox
 * @param {string} identifier id of the checkbox
 */

export const onChangeCheck = (data, identifier) => ({
	type: ON_CHANGE_CHECK,
	data,
	identifier
});

export const registerUser = () => ({
	type: REGISTER_USER
});

export const loginUser = () => ({
	type: LOGIN_USER
});

export const isSubmit = () => ({
	type: IS_SUBMIT
});

/**
 * @param {number} response status response of the request api
 * @param {string} message message of the response
 */

export const createdUser = (response, message) => ({
	type: CREATED_USER,
	response,
	message
});

/**
 * @param {number} response status response of the request api
 * @param {string} message message if success or not
 */

export const connectedUser = (response, message) => ({
	type: CONNECTED_USER,
	response,
	message
});

export const clearField = () => ({
	type: CLEAR_FIELD
});
