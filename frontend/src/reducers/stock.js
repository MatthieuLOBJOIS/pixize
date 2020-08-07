import { SAVE_ALL_STOCK } from 'actions/stock';

const initialState = {
	allStock: [],
};

const stockReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_ALL_STOCK: {
			return { ...state, allStock: action.payload };
		}

		default:
			return state;
	}
};

export default stockReducer;
