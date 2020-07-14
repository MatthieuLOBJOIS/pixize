import { connect } from 'react-redux';
import { getState } from 'redux-localstore';

import FormAccount from 'components/Pages/Profile/FormAccount';
import { changeCurrentUser, onChangeInput } from 'actions/user';

const mapStateToProps = (state) => {
	const stateLocalStorage = getState();
	return {
		currentUser: stateLocalStorage.user.currentUser
	};
};

const mapDispatchToProps = (dispatch) => ({
	changeCurrentUser: (event) => {
		dispatch(changeCurrentUser(event.target.value, event.target.id));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAccount);
