/**
 * @param {string} value value of the input
 * @param {string} identifier id of the input
 * @param {string} password value of the password for match with passwordConfirm
 * @returns {boolean} true if value match with regex/condition else false
 */

export const validateField = (value, identifier, password) => {
	switch (identifier) {
		case 'username': {
			if (value !== '') {
				return true;
			}
			return false;
		}
		case 'mail': {
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
				return true;
			}
			return false;
		}
		case 'password': {
			if (/^(?=.*\d).{4,8}$/.test(value)) {
				return true;
			}
			return false;
		}
		case 'passwordConfirm': {
			if (value === password) {
				return true;
			}
			return false;
		}
	}
};
