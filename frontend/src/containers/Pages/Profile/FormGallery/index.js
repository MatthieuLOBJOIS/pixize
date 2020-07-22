import { connect } from 'react-redux';

import FormGallery from 'components/Pages/Profile/FormGallery';
import { setDisplayGallery } from 'actions/user';

const mapStateToProps = (state) => {
	return {
		displayGallery: state.user.displayGallery,
	};
};

const mapDispatchToProps = (dispatch) => ({
	setDisplayGallery: (status) => {
		return () => {
			dispatch(setDisplayGallery(status));
		};
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(FormGallery);
