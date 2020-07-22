import React from 'react';
import { FcGallery } from 'react-icons/fc';

import FormAccount from 'containers/Pages/Profile/FormAccount';
import FormGallery from './FormGallery';

const Profile = () => {
	return (
		<div>
			<FcGallery size="5em" />
			<FormAccount />
			<FormGallery />
		</div>
	);
};

export default Profile;
