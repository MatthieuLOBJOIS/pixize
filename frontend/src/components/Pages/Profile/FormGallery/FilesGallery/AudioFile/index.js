import React from 'react';

import useStyles from './style';

const AudioFile = ({ audioArray }) => {
	const classes = useStyles();

	return (
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
	);
};

export default AudioFile;
