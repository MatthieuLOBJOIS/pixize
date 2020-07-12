import { connect } from 'react-redux';
import { getState } from 'redux-localstore';

import MenuAuth from 'components/HeaderView/MenuAuth';
import { logoutUser } from 'actions/user';

const mapStateToProps = (state) => {
	const stateLocalStorage = getState();

	return {
		//connectedUser: stateLocalStorage?.user?.connectedUser,
		userAuth: stateLocalStorage.user.userAuth
	};
};

const mapDispatchToProps = (dispatch) => ({
	logoutUser: () => {
		dispatch(logoutUser());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuAuth);
