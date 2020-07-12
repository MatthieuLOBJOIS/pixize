import { resetState } from 'redux-localstore';
import axios from 'axios';

import {
	REGISTER_USER,
	LOGIN_USER,
	LOGOUT_USER,
	isSubmit,
	createdUser,
	connectedUser,
	disconnectUser,
	takeDataUser,
	setAlert
} from 'actions/user';

const userMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case REGISTER_USER: {
			const authUser = store.getState().user;
			const data = {
				username: authUser.username.value,
				mail: authUser.mail.value,
				password: authUser.password.value,
				check: authUser.check
			};

			const status =
				authUser.username.status &&
				authUser.mail.status &&
				authUser.password.status &&
				authUser.passwordConfirm.status;

			store.dispatch(isSubmit());
			if (status) {
				axios({
					method: 'post',
					url: `${process.env.REACT_APP_API_URL}/api/auth/signup`,
					data
				})
					.then((response) => {
						console.log(response);
						const alert = {
							type: 'success',
							color: '',
							icon: 'check',
							title: `Votre compte a été créé avec succès, vous pouvez vous connecter.`
						};
						store.dispatch(setAlert(alert));
						store.dispatch(createdUser('isCreat'));
					})
					.catch((error) => {
						console.log(error);
						const alert = {
							type: 'error',
							color: 'red',
							icon: 'close',
							title: "Echec de l'inscription."
						};
						store.dispatch(setAlert(alert));
						store.dispatch(createdUser('isCreatError'));
					});
			}
			break;
		}

		case LOGIN_USER: {
			const mail = store.getState().user.mail.value;
			const password = store.getState().user.password.value;
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

						localStorage.setItem('token', response.data.token);

						store.dispatch(takeDataUser());
						store.dispatch(setAlert(alert));
						store.dispatch(connectedUser('isConnect'));
					})
					.catch((error) => {
						const alert = {
							type: 'error',
							color: 'red',
							icon: 'close',
							title: 'Mot de passe ou mail incorrect'
						};
						store.dispatch(setAlert(alert));
						store.dispatch(connectedUser('isConnectError'));
					});
			}
			break;
		}

		case LOGOUT_USER: {
			resetState();
			const alert = {
				type: 'info',
				color: 'orange',
				icon: 'log out',
				title: 'Vous avez été déconnecté avec succès, à bientôt sur Pixize !'
			};
			store.dispatch(setAlert(alert));
			store.dispatch(disconnectUser('isLogout'));
			break;
		}

		default:
			next(action);
	}
};
export default userMiddleware;
