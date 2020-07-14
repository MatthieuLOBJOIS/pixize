import axios from 'axios';
import { alertToast } from 'utils/alertToast';

import { LOGIN_USER, LOGOUT_USER, FETCH_AUTH, connectedUser, disconnectUser, setAuth } from 'actions/auth';
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
						password
					}
				})
					.then((response) => {
						//console.log(response.data, response);
						const alert = {
							type: 'info',
							color: 'brown',
							icon: 'info',
							title: 'Bienvenue sur Pixize !'
						};
						alertToast(alert);
						localStorage.setItem('token', response.data.token);

						store.dispatch(takeDataUser());
						store.dispatch(connectedUser('isConnect'));
					})
					.catch((error) => {
						const alert = {
							type: 'error',
							color: 'red',
							icon: 'close',
							title: 'Mot de passe ou mail incorrect'
						};
						alertToast(alert);
						store.dispatch(connectedUser('isConnectError'));
					});
			}
			break;
		}

		case LOGOUT_USER: {
			localStorage.clear();
			const alert = {
				type: 'info',
				color: 'orange',
				icon: 'log out',
				title: 'Vous avez été déconnecté avec succès, à bientôt sur Pixize !'
			};
			alertToast(alert);
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
