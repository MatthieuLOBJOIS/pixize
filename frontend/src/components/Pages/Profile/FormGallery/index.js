import React from 'react';
import classNames from 'classnames';
import { FcGallery } from 'react-icons/fc';
import { Icon } from 'semantic-ui-react';

import useStyles from './style';

const FormGallery = ({ displayGallery, setDisplayGallery }) => {
	const classes = useStyles();
	const galleryClass = classNames(
		{ [classes.galleryHidden]: !displayGallery },
		{ [classes.galleryDisplay]: displayGallery }
	);

	return (
		<div>
			<FcGallery className={classes.iconGallery} onClick={setDisplayGallery('open')} />

			<div className={galleryClass}>
				<Icon onClick={setDisplayGallery('close')} name="close" color="brown" size="big" />
				gallery
			</div>
		</div>
	);
};

export default FormGallery;
