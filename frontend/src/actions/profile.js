// action type

export const SET_DISPLAY_ACCOUNT = 'SET_DISPLAY_ACCOUNT';
export const SET_DISPLAY_GALLERY = 'SET_DISPLAY_GALLERY';
export const ON_CHANGE_FILES = 'ON_CHANGE_FILES';
export const UPLOAD_FILES = 'UPLOAD_FILES';

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
