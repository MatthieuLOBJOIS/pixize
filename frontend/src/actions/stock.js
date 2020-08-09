// action type
export const GET_ALL_STOCK = 'GET_ALL_STOCK';
export const SAVE_ALL_STOCK = 'SAVE_ALL_STOCK';

// action creators
export const getAllStock = () => ({
	type: GET_ALL_STOCK,
});

/**
 * @param {array} payload all stock file
 */

// action creators
export const saveAllStock = (payload) => ({
	type: SAVE_ALL_STOCK,
	payload,
});
