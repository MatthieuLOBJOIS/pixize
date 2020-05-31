import { GET_ALL_STOCK} from '../actions/stock';


const stockMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case GET_ALL_STOCK: {

            const myInit = { method: 'GET',
               headers: { 'Content-Type': 'application/json' },
               mode: 'cors',
               cache: 'default' };

return fetch(`${process.env.REACT_APP_API_URL}/api/stock`,myInit)
.then(function(response) {
  console.log(response.json(), process.env.REACT_APP_API_URL)
})
        }
		default:
			next(action);
	}
};
export default stockMiddleware;