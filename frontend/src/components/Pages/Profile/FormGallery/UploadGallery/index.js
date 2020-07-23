import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { Button } from 'semantic-ui-react';
import useStyles from './style';

const UploadGallery = ({ handleClickOpenFiles, onChangeFiles }) => {
	const classes = useStyles();
	return (
		<div>
			<h1>{'Montre-nous tes oeuvres ! :)'}</h1>

			<input multiple type="file" onChange={onChangeFiles} id="choose-files" />

			<Button onClick={handleClickOpenFiles} color="orange">
				Envoyer <FiUploadCloud className={classes.iconUpload} />
			</Button>
		</div>
	);
};

export default UploadGallery;
