import { SAVE_ALL_STOCK, SEARCHBAR_STOCK } from 'actions/stock';

const initialState = {
	allStock: [],
	searchValue: '',
};

const stockReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_ALL_STOCK: {
			return { ...state, allStock: action.payload };
		}

		case SEARCHBAR_STOCK: {
			return { ...state, searchValue: action.value };
		}

		default:
			return state;
	}
};

export default stockReducer;
