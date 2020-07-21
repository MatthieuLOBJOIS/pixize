import { connect } from 'react-redux';

import App from 'components/App';

import { fetchAuth } from 'actions/auth';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	fetchAuth: () => {
		dispatch(fetchAuth());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
