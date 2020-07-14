import axios from 'axios';
import { alertToast } from 'utils/alertToast';

import { REGISTER_USER, CHANGE_CURRENT_USER, isSubmit, createdUser, saveNewCurrentUser } from 'actions/user';

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

		case CHANGE_CURRENT_USER: {
			const identifier = action.identifier;
			const value = action.data;
			const currentUser = store.getState().user.currentUser;
			const newCurrentUser = {
				...currentUser,
				[identifier]: value
			};
			store.dispatch(saveNewCurrentUser(newCurrentUser));
			break;
		}

		default:
			next(action);
	}
};
export default userMiddleware;
