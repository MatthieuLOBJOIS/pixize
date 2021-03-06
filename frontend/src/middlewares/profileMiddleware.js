import axios from 'axios';
import jwtDecode from 'jwt-decode';

import {
	UPLOAD_FILES,
	FETCH_STOCKS_CURRENT_USER,
	DELETE_FILE,
	fetchStocksCurrentUser,
	saveStocksCurrentUser,
} from 'actions/profile';
import { alertToast } from 'utils/alertToast';

const profileMiddleware = (store) => (next) => (action) => {
	const token = localStorage.getItem('token');
	const decoded = token !== null ? jwtDecode(token) : {};
	const url = `${process.env.REACT_APP_API_URL}/api/stock/${decoded.userId}`;

	const headers =  {
			'Content-Type': 'application/json',
 		  'Authorization': `Bearer ${token}`
		}
	

	switch (action.type) {
		case UPLOAD_FILES: {
			const files = store.getState().profile.files;

			if (files.length > 0) {
				const data = new FormData();

				for (let i = 0; i < files.length; i++) {
					data.append('multi-files', files[i]);
				}

				axios
					.post(url, data, {headers: {...headers, 'Content-Type': 'multipart/form-data'}  })
					.then((response) => {
						console.log(response);
						alertToast('galleryUpdate');
						store.dispatch(fetchStocksCurrentUser());
					})
					.catch((error) => {
						console.log(error);
					});
			}
			break;
		}

		case FETCH_STOCKS_CURRENT_USER: {
			axios
				.get(url, {headers})
				.then((response) => {
					console.log(response);
					store.dispatch(saveStocksCurrentUser(response.data));
				})
				.catch((error) => {
					console.log(error);
				});
			break;
		}

		case DELETE_FILE: {
			const path = action.payload;
			axios
				.delete(url, { data: { path }, headers })
				.then((response) => {
					console.log(response);
					store.dispatch(fetchStocksCurrentUser());
					alertToast('deleteFile');
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
export default profileMiddleware;
