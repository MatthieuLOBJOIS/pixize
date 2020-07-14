// action type
export const ON_CHANGE_INPUT = 'ON_CHANGE_INPUT';
export const ON_CHANGE_CHECK = 'ON_CHANGE_CHECK';
export const REGISTER_USER = 'REGISTER_USER';

export const IS_SUBMIT = 'IS_SUBMIT';
export const CREATED_USER = 'CREATED_USER';

export const TAKE_DATA_USER = 'TAKE_DATA_USER';
export const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';
export const SAVE_NEW_CURRENT_USER = 'SAVE_NEW_CURRENT_USER';
export const SET_ALERT = 'SET_ALERT';
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

export const isSubmit = () => ({
	type: IS_SUBMIT
});

/**
 * @param {string} payload status text response of the request api
 */

export const createdUser = (payload) => ({
	type: CREATED_USER,
	payload
});

export const takeDataUser = () => ({
	type: TAKE_DATA_USER
});

/**
 * @param {string} data value enter by the user
 * @param {string} identifier id of the input
 */

export const changeCurrentUser = (data, identifier) => ({
	type: CHANGE_CURRENT_USER,
	data,
	identifier
});

/**
 * @param {string} data new value of the current user
 */

export const saveNewCurrentUser = (data) => ({
	type: SAVE_NEW_CURRENT_USER,
	data
});

/**
 * @param {object} payload object with color, type, icon, title of the alert
 */

export const setAlert = (payload) => ({
	type: SET_ALERT,
	payload
});

export const clearField = () => ({
	type: CLEAR_FIELD
});
