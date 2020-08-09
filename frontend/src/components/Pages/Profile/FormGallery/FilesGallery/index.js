import React from 'react';

import fileTypeFilter from 'utils/fileTypeFilter';

import PictureFile from './PictureFile';
import VideoFile from './VideoFile';
import AudioFile from './AudioFile';
import ArtworkFile from './ArtworkFile';

import useStyles from './style';

const FilesGallery = ({ stocksCurrentUser, deleteFile }) => {
	const classes = useStyles();

	const fileArray = fileTypeFilter(stocksCurrentUser);

	return (
		<div className={classes.root}>
			<p className={classes.titleStock}>Mes photos : </p>
			<PictureFile deleteFile={deleteFile} imageArray={fileArray.image} />

			<p className={classes.titleStock}>Mes Musiques : </p>
			<AudioFile audioArray={fileArray.audio} />

			<p className={classes.titleStock}>Mes vidéos : </p>
			<VideoFile videoArray={fileArray.video} />

			<p className={classes.titleStock}>Mes Illustrations : </p>
			<ArtworkFile artworkArray={fileArray.artwork} />
		</div>
	);
};

export default FilesGallery;
