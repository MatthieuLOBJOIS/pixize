import { connect } from 'react-redux';

import UploadGallery from 'components/Pages/Profile/FormGallery/UploadGallery';

import { onChangeFiles, uploadFiles, fetchStocksCurrentUser } from 'actions/profile';

const mapStateToProps = (state) => ({
	stocksCurrentUser: state.profile.stocksCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
	uploadFiles: (event) => {
		event.preventDefault();
		dispatch(uploadFiles());
	},

	onChangeFiles: (event) => {
		dispatch(onChangeFiles(event.target.files));
	},

	fetchStocksCurrentUser: () => {
		dispatch(fetchStocksCurrentUser());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadGallery);
