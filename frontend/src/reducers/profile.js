import { SET_DISPLAY_ACCOUNT, SET_DISPLAY_GALLERY } from 'actions/profile';

const initialState = {
	displayAccount: false,
	displayGallery: false
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DISPLAY_ACCOUNT: {
			let status = null;
			switch (action.payload) {
				case 'open': {
					status = true;
					break;
				}
				case 'close': {
					status = false;
					break;
				}
				default:
					status = true;
			}
			return { ...state, displayAccount: status };
		}

		case SET_DISPLAY_GALLERY: {
			let status = null;
			switch (action.payload) {
				case 'open': {
					status = true;
					break;
				}
				case 'close': {
					status = false;
					break;
				}
				default:
					status = true;
			}
			return { ...state, displayGallery: status };
		}

		default:
			return state;
	}
};

export default profileReducer;
