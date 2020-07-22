import { connect } from 'react-redux';

import FormAccount from 'components/Pages/Profile/FormAccount';
import {
	changeCurrentUser,
	saveNewCurrentUser,
	setDisplayAccount,
} from 'actions/user';

const mapStateToProps = (state) => {
	return {
		currentUser: state.user.currentUser,
		username: state.user.status.username,
		mail: state.user.status.mail,
		displayAccount: state.user.displayAccount,
		displayGallery: state.user.displayGallery,
	};
};

const mapDispatchToProps = (dispatch) => ({
	changeCurrentUser: (event) => {
		dispatch(changeCurrentUser(event.target.value, event.target.id));
	},

	saveNewCurrentUser: () => {
		dispatch(saveNewCurrentUser());
	},

	setDisplayAccount: (status) => {
		return () => {
			dispatch(setDisplayAccount(status));
		};
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAccount);
