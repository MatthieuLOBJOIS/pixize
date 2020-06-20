import { REGISTER_USER, isSubmit } from 'actions/user';
import axios from 'axios';

const userMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case REGISTER_USER:
			{
				const authUser = store.getState().user;
				const data = {
					username: authUser.username.value,
					mail: authUser.mail.value,
					password: authUser.password.value,
					check: authUser.check,
				};
				console.log(data, 'data');
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
						data,
					})
						.then((response) => {
							console.log(response);
						})
						.catch((error) => {
							console.log(error);
						});
				}
			}
			break;
		default:
			next(action);
	}
};
export default userMiddleware;
