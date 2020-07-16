import { connect } from 'react-redux';

import FormAccount from 'components/Pages/Profile/FormAccount';
import { changeCurrentUser, saveNewCurrentUser } from 'actions/user';

const mapStateToProps = (state) => {
	return {
		currentUser: state.user.currentUser
	};
};

const mapDispatchToProps = (dispatch) => ({
	changeCurrentUser: (event) => {
		dispatch(changeCurrentUser(event.target.value, event.target.id));
	},

	saveNewCurrentUser: () => {
		dispatch(saveNewCurrentUser());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAccount);
