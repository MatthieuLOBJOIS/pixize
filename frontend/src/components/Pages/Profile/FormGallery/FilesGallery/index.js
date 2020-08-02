import React from 'react';
import useStyles from './style';

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
			<p>Mes photos : </p>
			{imageArray.map((stock) => {
				return (
					<img
						style={{ width: '100px', height: '100px' }}
						key={stock._id}
						src={stock.stockUrl}
						alt={stock.filename}
					/>
				);
			})}

			<p>Mes Musiques : </p>
			{audioArray.map((stock) => {
				return (
					<audio key={stock._id} controls src={stock.stockUrl}>
						Your browser does not support the
						<code>audio</code> element.
					</audio>
				);
			})}

			<p>Mes vidéos : </p>
			{videoArray.map((stock) => {
				return (
					<video key={stock._id} controls width="250">
						<source src={stock.stockUrl} type="video/mp4" />
						Sorry, your browser doesn't support embedded videos.
					</video>
				);
			})}

			<p>Mes Illustrations : </p>
			{artworkArray.map((stock) => {
				return (
					<img
						style={{ width: '100px', height: '100px' }}
						key={stock._id}
						src={stock.stockUrl}
						alt={stock.filename}
					/>
				);
			})}
		</div>
	);
};

export default FilesGallery;
