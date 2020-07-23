import { connect } from 'react-redux';

import UploadGallery from 'components/Pages/Profile/FormGallery/UploadGallery';

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
	handleClickOpenFiles: () => {
		console.log('open');
	},

	onChangeFiles: (event) => {
		console.log(event.target.files);
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadGallery);
