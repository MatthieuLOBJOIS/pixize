import { connect } from 'react-redux';

import App from 'components/App';

import { getAllStock } from 'actions/stock';
import { clearField } from 'actions/user';

const mapStateToProps = (state) => ({
	createdUser: state.user.createdUser,
	connectedUser: state.user.connectedUser
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
