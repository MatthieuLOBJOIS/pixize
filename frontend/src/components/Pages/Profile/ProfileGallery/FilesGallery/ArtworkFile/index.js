import React from 'react';

import useStyles from './style';

const ArtworkFile = ({ artworkArray }) => {
	const classes = useStyles();

	return (
		<div className={classes.artworkBlock}>
			{artworkArray.length !== 0 ? (
				artworkArray.map((stock) => {
					return (
						<img className={classes.artwork} key={stock._id} src={stock.stockUrl} alt={stock.filename} />
					);
				})
			) : (
				<p>Aucune illustration dans la galerie</p>
			)}
		</div>
	);
};

export default ArtworkFile;
