import { connect } from 'react-redux';

import ProfileGallery from 'components/Pages/Profile/ProfileGallery';
import { setDisplayGallery, fetchStocksCurrentUser } from 'actions/profile';

const mapStateToProps = (state) => {
	return {
		displayGallery: state.profile.displayGallery,
		stocksCurrentUser: state.profile.stocksCurrentUser
	};
};

const mapDispatchToProps = (dispatch) => ({
	setDisplayGallery: (status) => {
		return () => {
			dispatch(setDisplayGallery(status));
		};
	},
	fetchStocksCurrentUser: () => {
		dispatch(fetchStocksCurrentUser());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileGallery);
