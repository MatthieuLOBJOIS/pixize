import { connect } from 'react-redux';

import App from 'components/App';

import { getAllStock } from 'actions/stock';
import { fetchAuth } from 'actions/user';

const mapStateToProps = (state) => ({
	alertToast: state.user.alertToast
});

const mapDispatchToProps = (dispatch) => ({
	getAllStock: () => {
		dispatch(getAllStock());
	},

	fetchAuth: () => {
		dispatch(fetchAuth());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
