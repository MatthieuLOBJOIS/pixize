import { connect } from 'react-redux';

import App from 'components/App';

import { getAllStock } from 'actions/stock';
import { clearField } from 'actions/user';

const mapStateToProps = (state) => ({
	alertToast: state.user.alertToast,
	userAuth: state.user.userAuth,
	userCreat: state.user.userCreat
});

const mapDispatchToProps = (dispatch) => ({
	getAllStock: () => {
		dispatch(getAllStock());
	},
	clearField: () => {
		dispatch(clearField());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
