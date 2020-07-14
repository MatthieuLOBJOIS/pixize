import { connect } from 'react-redux';
import Register from 'components/Pages/Register';
import { onChangeInput, onChangeCheck, registerUser, clearField } from 'actions/user';

const mapStateToProps = (state) => ({
	username: state.user.username,
	mail: state.user.mail,
	password: state.user.password,
	passwordConfirm: state.user.passwordConfirm,
	check: state.user.check,
	isSubmit: state.user.isSubmit,
	userCreat: state.user.userCreat
});

const mapDispatchToProps = (dispatch) => ({
	onChangeInput: (event) => {
		dispatch(onChangeInput(event.target.value, event.target.id));
	},
	onChangeCheck: (event) => {
		dispatch(onChangeCheck(event.target.checked, event.target.id));
	},
	registerUser: () => {
		dispatch(registerUser());
	},
	clearField: () => {
		dispatch(clearField());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
