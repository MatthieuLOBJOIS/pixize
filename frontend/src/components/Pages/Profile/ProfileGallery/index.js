import React, { useEffect } from 'react';

import UploadGallery from 'containers/Pages/Profile/ProfileGallery/UploadGallery';
import FilesGallery from 'containers/Pages/Profile/ProfileGallery/FilesGallery';
import PropTypes, { object } from 'prop-types';

import useStyles from './style';

const ProfileGallery = ({ stocksCurrentUser, fetchStocksCurrentUser }) => {
	const classes = useStyles();

	useEffect(() => {
		fetchStocksCurrentUser();
	}, []);

	return (
		<div>
			<div className={classes.galleryDisplay}>
				<h1>{'Montre-nous tes oeuvres ! :)'}</h1>
				<UploadGallery />
				<FilesGallery stocksCurrentUser={stocksCurrentUser} />
			</div>
		</div>
	);
};

ProfileGallery.propTypes = {
	stocksCurrentUser: PropTypes.arrayOf(object).isRequired,
	fetchStocksCurrentUser: PropTypes.func.isRequired
};

export default ProfileGallery;
