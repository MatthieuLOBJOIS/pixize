import { SET_DISPLAY_ACCOUNT, SET_DISPLAY_GALLERY, ON_CHANGE_FILES, SAVE_STOCKS_CURRENT_USER } from 'actions/profile';

const initialState = {
	displayAccount: false,
	displayGallery: false,
	files: [],
	stocksCurrentUser: []
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

		case ON_CHANGE_FILES: {
			return { ...state, files: action.payload };
		}

		case SAVE_STOCKS_CURRENT_USER: {
			return { ...state, stocksCurrentUser: action.payload };
		}

		default:
			return state;
	}
};

export default profileReducer;
