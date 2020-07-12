import { connect } from 'react-redux';
import { getState } from 'redux-localstore';

import FormAccount from 'components/Pages/Profile/FormAccount';

const mapStateToProps = (state) => {
	const stateLocalStorage = getState();
	return {
		currentUser: stateLocalStorage.user.currentUser
	};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FormAccount);
