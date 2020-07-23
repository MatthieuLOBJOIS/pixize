// action type

export const SET_DISPLAY_ACCOUNT = 'SET_DISPLAY_ACCOUNT';
export const SET_DISPLAY_GALLERY = 'SET_DISPLAY_GALLERY';

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
