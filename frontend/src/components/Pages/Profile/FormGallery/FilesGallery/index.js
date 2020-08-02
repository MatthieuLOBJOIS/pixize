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
			<p className={classes.titleStock}>Mes photos : </p>
			<div className={classes.imageBlock}>
				{imageArray.length !== 0 ? (
					imageArray.map((stock) => {
						return (
							<img className={classes.image} key={stock._id} src={stock.stockUrl} alt={stock.filename} />
						);
					})
				) : (
					<p>Aucune photo dans la galerie</p>
				)}
			</div>

			<p className={classes.titleStock}>Mes Musiques : </p>
			<div className={classes.audioBlock}>
				{audioArray.length !== 0 ? (
					audioArray.map((stock) => {
						return (
							<div className={classes.audioElement} key={stock._id}>
								<p>{stock.originalname.split('.')[0]}</p>
								<audio className={classes.audio} controls src={stock.stockUrl}>
									<track default kind="captions" srcLang="en" />
									Your browser does not support the
									<code>audio</code> element.
								</audio>
							</div>
						);
					})
				) : (
					<p>Aucune musique dans la galerie</p>
				)}
			</div>

			<p className={classes.titleStock}>Mes vidéos : </p>
			<div className={classes.videoBlock}>
				{videoArray.length !== 0 ? (
					videoArray.map((stock) => {
						return (
							<video className={classes.video} key={stock._id} controls>
								<source src={stock.stockUrl} type="video/mp4" />
								<track default kind="captions" srcLang="en" />
								Sorry, your browser doesn't support embedded videos.
							</video>
						);
					})
				) : (
					<p>Aucune vidéo dans la galerie</p>
				)}
			</div>

			<p className={classes.titleStock}>Mes Illustrations : </p>
			<div className={classes.imageBlock}>
				{artworkArray.length !== 0 ? (
					artworkArray.map((stock) => {
						return (
							<img className={classes.image} key={stock._id} src={stock.stockUrl} alt={stock.filename} />
						);
					})
				) : (
					<p>Aucune illustration dans la galerie</p>
				)}
			</div>
		</div>
	);
};

export default FilesGallery;
