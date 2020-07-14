import axios from 'axios';
import { alertToast } from 'utils/alertToast';

import { REGISTER_USER, isSubmit, createdUser } from 'actions/register';

const registerMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case REGISTER_USER: {
			const userState = store.getState().register;
			const data = {
				username: userState.username.value,
				mail: userState.mail.value,
				password: userState.password.value,
				check: userState.check
			};

			const status =
				userState.username.status &&
				userState.mail.status &&
				userState.password.status &&
				userState.passwordConfirm.status;

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
						alertToast(alert);
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
						alertToast(alert);
						store.dispatch(createdUser('isCreatError'));
					});
			}
			break;
		}

		default:
			next(action);
	}
};
export default registerMiddleware;
