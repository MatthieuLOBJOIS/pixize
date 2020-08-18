import { connect } from 'react-redux';

import MenuAuth from 'components/HeaderView/MenuAuth';
import { logoutUser } from 'actions/auth';

const mapStateToProps = (state) => {
	return {
		userAuth: state.auth.userAuth,
		currentUser: state.user.currentUser
	};
};

const mapDispatchToProps = (dispatch) => ({
	logoutUser: () => {
		dispatch(logoutUser());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuAuth);
