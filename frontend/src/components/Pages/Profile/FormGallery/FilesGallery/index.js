import React from 'react';

import PictureFile from './PictureFile';
import VideoFile from './VideoFile';
import AudioFile from './AudioFile';

import useStyles from './style';
import ArtworkFile from './ArtworkFile';

const FilesGallery = ({ stocksCurrentUser }) => {
	const classes = useStyles();

	const imageArray = [];
	const audioArray = [];
	const videoArray = [];
	const artworkArray = [];

	stocksCurrentUser.map((stock) => {
		const fileType = stock.mimetype.split('/')[0];
		switch (fileType) {
			case 'image': {
				if (stock.mimetype === 'image/svg+xml') {
					artworkArray.push(stock);
				} else {
					imageArray.push(stock);
				}
				break;
			}
			case 'audio': {
				audioArray.push(stock);
				break;
			}
			case 'video': {
				videoArray.push(stock);
				break;
			}
			default:
				console.log('fileType not found');
		}
	});

	return (
		<div className={classes.root}>
			<p className={classes.titleStock}>Mes photos : </p>
			<PictureFile imageArray={imageArray} />

			<p className={classes.titleStock}>Mes Musiques : </p>
			<AudioFile audioArray={audioArray} />

			<p className={classes.titleStock}>Mes vidéos : </p>
			<VideoFile videoArray={videoArray} />

			<p className={classes.titleStock}>Mes Illustrations : </p>
			<ArtworkFile artworkArray={artworkArray} />
		</div>
	);
};

export default FilesGallery;
