// action type

export const TAKE_DATA_USER = 'TAKE_DATA_USER';
export const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
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
 * @param {string} data new value of the current user
 */

export const updateCurrentUser = (data) => ({
	type: UPDATE_CURRENT_USER,
	data
});

export const saveNewCurrentUser = () => ({
	type: SAVE_NEW_CURRENT_USER
});
