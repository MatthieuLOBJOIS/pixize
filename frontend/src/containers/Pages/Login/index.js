import { connect } from 'react-redux';

import Login from 'components/Pages/Login';
import { loginUser, onChangeInput } from 'actions/user';

const mapStateToProps = (state) => ({
	mail: state.user.mail,
	password: state.user.password
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
