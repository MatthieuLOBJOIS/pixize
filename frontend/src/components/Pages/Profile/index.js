import React from 'react';

import FormAccount from 'containers/Pages/Profile/FormAccount';
import FormGallery from 'containers/Pages/Profile/FormGallery';
import useStyles from './style';

const Profile = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<FormAccount />
			<FormGallery />
		</div>
	);
};

export default Profile;
