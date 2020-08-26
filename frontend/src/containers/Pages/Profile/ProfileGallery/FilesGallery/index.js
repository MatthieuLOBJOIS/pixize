import { connect } from 'react-redux';

import FilesGallery from 'components/Pages/Profile/ProfileGallery/FilesGallery';

import { deleteFile } from 'actions/profile';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	deleteFile: (path) => {
		return () => {
			dispatch(deleteFile(path));
		};
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(FilesGallery);
