import axios from 'axios';

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

						store.dispatch(createdUser('isCreat'));
					})
					.catch((error) => {
						console.log(error);

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
