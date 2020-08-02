// action type

export const SET_DISPLAY_ACCOUNT = 'SET_DISPLAY_ACCOUNT';
export const SET_DISPLAY_GALLERY = 'SET_DISPLAY_GALLERY';
export const ON_CHANGE_FILES = 'ON_CHANGE_FILES';
export const UPLOAD_FILES = 'UPLOAD_FILES';
export const FETCH_STOCKS_CURRENT_USER = 'FETCH_STOCKS_CURRENT_USER';
export const SAVE_STOCKS_CURRENT_USER = 'SAVE_STOCKS_CURRENT_USER';

// action creators

/**
 * @param {string} payload status for use or not the classnames
 */

export const setDisplayAccount = (payload) => ({
	type: SET_DISPLAY_ACCOUNT,
	payload
});

/**
 * @param {string} payload status for use or not the classnames
 */

export const setDisplayGallery = (payload) => ({
	type: SET_DISPLAY_GALLERY,
	payload
});

/**
 * @param {array} payload array of files choose
 */

export const onChangeFiles = (payload) => ({
	type: ON_CHANGE_FILES,
	payload
});

export const uploadFiles = () => ({
	type: UPLOAD_FILES
});

/**
 * @param {string} userId id of the current user
 */

export const fetchStocksCurrentUser = (userId) => ({
	type: FETCH_STOCKS_CURRENT_USER,
	userId
});

/**
 * @param {array} payload array of files fetched
 */

export const saveStocksCurrentUser = (payload) => ({
	type: SAVE_STOCKS_CURRENT_USER,
	payload
});
