import { GET_ALL_STOCK } from 'actions/stock';

const stockMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case GET_ALL_STOCK:
			{
				const myInit = {
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
					mode: 'cors',
					cache: 'default'
				};

				fetch(`${process.env.REACT_APP_API_URL}/api/stock`, myInit).then((response) => {
					console.log(response.json(), process.env.REACT_APP_API_URL);
				});
			}
			break;
		default:
			next(action);
	}
};
export default stockMiddleware;
