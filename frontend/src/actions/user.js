// action type

export const TAKE_DATA_USER = 'TAKE_DATA_USER';
export const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const STATUS_VALIDATE_FIELD = 'STATUS_VALIDATE_FIELD';
export const SAVE_NEW_CURRENT_USER = 'SAVE_NEW_CURRENT_USER';

// action creators

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
 * @param {object} data new value of the current user
 */

export const updateCurrentUser = (data) => ({
	type: UPDATE_CURRENT_USER,
	data
});

/**
 * @param {boolean} payload status of the field profile 
 */

export const statusValidateField = (payload) => ({
	type: STATUS_VALIDATE_FIELD,
	payload
});

export const saveNewCurrentUser = () => ({
	type: SAVE_NEW_CURRENT_USER
});
