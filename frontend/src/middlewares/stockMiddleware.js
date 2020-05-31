import { GET_ALL_STOCK} from '../actions/stock';


const stockMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case GET_ALL_STOCK: {

            const myInit = { method: 'GET',
               headers: { 'Content-Type': 'application/json' },
               mode: 'cors',
               cache: 'default' };

return fetch('http://localhost:3010/api/stock',myInit)
.then(function(response) {
  console.log(response.json())
})
        }
		default:
			next(action);
	}
};
export default stockMiddleware;