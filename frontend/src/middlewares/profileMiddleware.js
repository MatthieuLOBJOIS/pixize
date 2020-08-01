import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { UPLOAD_FILES } from 'actions/profile';
import { alertToast } from 'utils/alertToast';

const profileMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case UPLOAD_FILES: {
			const files = store.getState().profile.files;

			if (files.length > 0) {
				const token = localStorage.getItem('token');
				const decoded = jwtDecode(token);

				const data = new FormData();

				for (let i = 0; i < files.length; i++) {
					data.append('multi-files', files[i]);
				}

				const config = {
					headers: {
						'content-type': 'multipart/form-data'
					}
				};
				const url = `${process.env.REACT_APP_API_URL}/api/stock/${decoded.userId}`;

				axios
					.post(url, data, config.headers)
					.then((response) => {
						console.log(response);
						alertToast('galleryUpdate');
					})
					.catch((error) => {
						console.log(error);
					});
			}
			break;
		}
		default:
			next(action);
	}
};
export default profileMiddleware;
