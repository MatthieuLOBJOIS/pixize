// action type
export const ON_CHANGE_INPUT = 'ON_CHANGE_INPUT';
export const ON_CHANGE_CHECK = 'ON_CHANGE_CHECK';
export const REGISTER_USER = 'REGISTER_USER';

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

/**
 * 
 */

export const registerUser = () => ({
	type: REGISTER_USER
});
