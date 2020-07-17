/**
 * @param {string} value value of the input
 * @returns {boolean} true if value match with regex/condition else false
 */

export const validateUsername = (value) => {
	if (value !== '') {
		return true;
	}
	return false;
};

/**
 * @param {string} value value of the input
 * @returns {boolean} true if value match with regex/condition else false
 */

export const validateMail = (value) => {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
		return true;
	}
	return false;
};

/**
 * @param {string} value value of the input
 * @returns {boolean} true if value match with regex/condition else false
 */

export const validatePassword = (value) => {
	if (/^(?=.*\d).{4,8}$/.test(value)) {
		return true;
	}
	return false;
};

/**
 * @param {string} value value of the input
 * @param {string} password value of the password for match with passwordConfirm
 * @returns {boolean} true if value match with regex/condition else false
 */

export const validatePasswordConfirm = (value, password) => {
	if (value === password) {
		return true;
	}
	return false;
};

/**
 * @param {string} value value of the input
 * @param {string} identifier id of the input
 * @returns {boolean} true if value match with regex/condition else false
 */

export const validateField = (value, identifier) => {
	switch (identifier) {
		case 'username': {
			return validateUsername(value);
		}
		case 'mail': {
			return validateMail(value);
		}
		case 'password': {
			return validatePassword(value);
		}

		default:
			return true;
	}
};
