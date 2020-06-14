import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchBar from './SearchBar';
import PictureGallery from './PictureGallery';
import ArtworkGallery from './ArtworkGallery';
import VideoGallery from './VideoGallery';
import MusicGallery from './MusicGallery';
import useStyles from './style';

const Home = () => {
	const classes = useStyles();
	return (
		<div className={classes.home}>
			<SearchBar />
			<Switch>
				<Route exact path={[ '/', '/photos' ]} component={PictureGallery} />
				<Route exact path="/illustrations" component={ArtworkGallery} />
				<Route exact path="/videos" component={VideoGallery} />
				<Route exact path="/musiques" component={MusicGallery} />
			</Switch>
		</div>
	);
};

export default Home;
