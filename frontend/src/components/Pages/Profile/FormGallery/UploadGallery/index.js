import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import useStyles from './style';

const UploadGallery = ({ uploadFiles, onChangeFiles }) => {
	const classes = useStyles();

	return (
		<div className={classes.rootUpload}>
			<form className={classes.formUpload} onSubmit={uploadFiles}>
				<input className={classes.inputFile} type="file" name="multi-files" multiple onChange={onChangeFiles} />

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
