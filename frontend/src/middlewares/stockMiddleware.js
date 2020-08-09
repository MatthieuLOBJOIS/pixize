import axios from 'axios';
import { GET_ALL_STOCK, saveAllStock } from 'actions/stock';

const stockMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case GET_ALL_STOCK: {
			axios
				.get(`${process.env.REACT_APP_API_URL}/api/stock`)
				.then((response) => {
					//console.log(response);
					store.dispatch(saveAllStock(response.data));
				})
				.catch((error) => {
					console.log(error);
				});
			break;
		}

		default:
			next(action);
	}
};
export default stockMiddleware;
