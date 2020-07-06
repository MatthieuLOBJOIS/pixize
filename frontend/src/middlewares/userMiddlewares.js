import { resetState } from 'redux-localstore';
import axios from 'axios';
import {
	REGISTER_USER,
	LOGIN_USER,
	LOGOUT_USER,
	isSubmit,
	createdUser,
	connectedUser,
	disconnectUser
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
						store.dispatch(createdUser(response.status, response.data.message));
					})
					.catch((error) => {
						console.log(error);
						store.dispatch(createdUser(error.response.status, error.response.statusText));
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
						console.log(response.data, response);
						localStorage.setItem('token', response.data.token);
						store.dispatch(connectedUser(response.status, 'Bienvenue sur Pixize !'));
					})
					.catch((error) => {
						store.dispatch(connectedUser(error.response.status, 'Mot de passe ou mail incorrect'));
					});
			}
			break;
		}

		case LOGOUT_USER: {
			resetState();
			store.dispatch(disconnectUser());
			break;
		}

		default:
			next(action);
	}
};
export default userMiddleware;
