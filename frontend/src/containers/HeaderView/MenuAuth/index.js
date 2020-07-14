import { connect } from 'react-redux';

import MenuAuth from 'components/HeaderView/MenuAuth';
import { logoutUser } from 'actions/user';

const mapStateToProps = (state) => {
	return {
		userAuth: state.user.userAuth
	};
};

const mapDispatchToProps = (dispatch) => ({
	logoutUser: () => {
		dispatch(logoutUser());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuAuth);
