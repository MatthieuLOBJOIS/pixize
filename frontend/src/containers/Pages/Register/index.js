import { connect } from 'react-redux';

import Register from 'components/Pages/Register';
import { onChangeInput, onChangeCheck, registerUser } from '../../../actions/user';

const mapStateToProps = (state) => ({
	userAuth: state.user
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
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
