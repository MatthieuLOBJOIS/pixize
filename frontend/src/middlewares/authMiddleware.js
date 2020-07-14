import axios from 'axios';

import {
	LOGIN_USER,
	LOGOUT_USER,
	FETCH_AUTH,
	connectedUser,
	disconnectUser,
	setAuth,
} from 'actions/auth';
import { takeDataUser } from 'actions/user';

const authMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case LOGIN_USER: {
			const mail = store.getState().auth.mail;
			const password = store.getState().auth.password;
			if (mail !== '' && password !== '') {
				axios({
					method: 'post',
					url: `${process.env.REACT_APP_API_URL}/api/auth/login`,
					data: {
						mail,
						password,
					},
				})
					.then((response) => {
						//console.log(response.data, response);

						localStorage.setItem('token', response.data.token);

						store.dispatch(takeDataUser());
						store.dispatch(connectedUser('isConnect'));
					})
					.catch((error) => {
						store.dispatch(connectedUser('isConnectError'));
					});
			}
			break;
		}

		case LOGOUT_USER: {
			localStorage.clear();

			store.dispatch(disconnectUser('isLogout'));
			break;
		}

		case FETCH_AUTH: {
			const auth = localStorage.getItem('auth');

			if (auth) {
				store.dispatch(setAuth(auth));
				store.dispatch(takeDataUser());
			}
			break;
		}

		default:
			next(action);
	}
};
export default authMiddleware;
