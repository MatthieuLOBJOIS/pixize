import { connect } from 'react-redux';

import UploadGallery from 'components/Pages/Profile/FormGallery/UploadGallery';

import { onChangeFiles, uploadFiles } from 'actions/profile';

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
	uploadFiles: (event) => {
		event.preventDefault();
		dispatch(uploadFiles());
	},

	onChangeFiles: (event) => {
		dispatch(onChangeFiles(event.target.files));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadGallery);
