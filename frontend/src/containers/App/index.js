import { connect } from 'react-redux';

import App from 'components/App';

import { getAllStock } from 'actions/stock';

const mapStateToProps = (state) => ({
	createdUser: state.user.createdUser
});

const mapDispatchToProps = (dispatch) => ({
	getAllStock: () => {
		dispatch(getAllStock());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
