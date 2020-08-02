import React, { useEffect } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import useStyles from './style';

const UploadGallery = ({ uploadFiles, onChangeFiles }) => {
	const classes = useStyles();

	return (
		<div>
			<form onSubmit={uploadFiles}>
				<h1>{'Montre-nous tes oeuvres ! :)'}</h1>

				<input type="file" name="multi-files" multiple onChange={onChangeFiles} />

				<Button type="submit" color="orange">
					Envoyer <FiUploadCloud className={classes.iconUpload} />
				</Button>
			</form>
		</div>
	);
};

UploadGallery.propTypes = {
	uploadFiles: PropTypes.func.isRequired,
	onChangeFiles: PropTypes.func.isRequired
};

export default UploadGallery;
