import React from 'react';

import useStyles from './style';

const VideoFile = ({ videoArray }) => {
	const classes = useStyles();

	return (
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
	);
};

export default VideoFile;
