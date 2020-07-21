import { connect } from 'react-redux';

import Login from 'components/Pages/Login';
import { loginUser, onChangeInput } from 'actions/auth';

const mapStateToProps = (state) => ({
	mail: state.auth.mail,
	password: state.auth.password,
	userAuth: state.auth.userAuth
});

const mapDispatchToProps = (dispatch) => ({
	loginUser: () => {
		dispatch(loginUser());
	},
	onChangeInput: (event) => {
		dispatch(onChangeInput(event.target.value, event.target.id));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
