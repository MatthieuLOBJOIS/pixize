import { connect } from 'react-redux';
import Register from 'components/Pages/Register';
import { onChangeInput, onChangeCheck, registerUser, clearField } from 'actions/register';

const mapStateToProps = (state) => ({
	username: state.register.username,
	mail: state.register.mail,
	password: state.register.password,
	passwordConfirm: state.register.passwordConfirm,
	check: state.register.check,
	isSubmit: state.register.isSubmit,
	userCreat: state.register.userCreat
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
