import React from 'react';
import { Divider, Responsive } from 'semantic-ui-react';

import useStyles from './style';

const PictureGallery = ({ imageArray }) => {
	const classes = useStyles();
	const listPicture = imageArray.map((stock) => {
		return (
			<div className={classes.imageElement} key={stock.filename}>
				<img
					className={classes.image}
					src={stock.stockUrl}
					alt={stock.filename}
				/>
			</div>
		);
	});

	return (
		<div>
			<Divider hidden />
			<Responsive maxWidth={599}>
				<div className={classes.imageBlock}>{listPicture}</div>
			</Responsive>
			<Responsive minWidth={600} maxWidth={1249}>
				<div className={classes.imageBlock}>{listPicture}</div>
			</Responsive>
			<Responsive minWidth={1250}>
				<div className={classes.imageBlock}>{listPicture}</div>
			</Responsive>
		</div>
	);
};

export default PictureGallery;
