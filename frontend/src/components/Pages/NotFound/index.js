import React from 'react';
import useStyles from './style';

const NotFound = () => {
	const classes = useStyles();
	return <div className={classes.root}>Page erreur 404</div>;
};

export default NotFound;
