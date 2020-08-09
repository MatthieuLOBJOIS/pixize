import React, { useEffect } from 'react';
import classNames from 'classnames';
import { FcGallery } from 'react-icons/fc';
import { Icon } from 'semantic-ui-react';
import UploadGallery from 'containers/Pages/Profile/FormGallery/UploadGallery';
import FilesGallery from 'containers/Pages/Profile/FormGallery/FilesGallery';
import PropTypes, { object } from 'prop-types';

import useStyles from './style';

const FormGallery = ({ displayGallery, setDisplayGallery, stocksCurrentUser, fetchStocksCurrentUser }) => {
	const classes = useStyles();

	useEffect(() => {
		fetchStocksCurrentUser();
	}, []);

	const galleryClass = classNames(
		{ [classes.galleryHidden]: !displayGallery },
		{ [classes.galleryDisplay]: displayGallery }
	);

	return (
		<div>
			<FcGallery className={classes.iconGallery} onClick={setDisplayGallery('open')} />

			<div className={galleryClass}>
				<Icon
					className={classes.iconClose}
					onClick={setDisplayGallery('close')}
					name="close"
					color="brown"
					size="big"
				/>
				<h1>{'Montre-nous tes oeuvres ! :)'}</h1>
				<UploadGallery />

				<FilesGallery stocksCurrentUser={stocksCurrentUser} />
			</div>
		</div>
	);
};

FormGallery.propTypes = {
	stocksCurrentUser: PropTypes.arrayOf(object).isRequired,
	fetchStocksCurrentUser: PropTypes.func.isRequired
};

export default FormGallery;
