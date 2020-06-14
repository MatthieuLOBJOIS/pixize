import React from 'react';
import { Image, Divider } from 'semantic-ui-react';

import useStyles from './style';

const src = 'https://cdn.pixabay.com/photo/2020/05/01/19/07/tulips-5118757_960_720.jpg';

const PictureGallery = () => {
	const classes = useStyles();
	return (
		<div>
			<Divider hidden />
			<Image.Group size="small" className={classes.group}>
				<Image className={classes.picture} src={src} />
				<Image className={classes.picture} src={src} />
				<Image className={classes.picture} src={src} />
				<Image className={classes.picture} src={src} />
				<Image className={classes.picture} src={src} />
				<Image className={classes.picture} src={src} />
				<Image className={classes.picture} src={src} />
				<Image className={classes.picture} src={src} />
				<Image className={classes.picture} src={src} />
				<Image className={classes.picture} src={src} />
				<Image className={classes.picture} src={src} />
				<Image className={classes.picture} src={src} />
			</Image.Group>
		</div>
	);
};

export default PictureGallery;
