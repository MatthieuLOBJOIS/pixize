import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchBar from 'components/Pages/Home/SearchBar';
import PictureGallery from 'components/Pages/Home/PictureGallery';
import ArtworkGallery from 'components/Pages/Home/ArtworkGallery';
import VideoGallery from 'components/Pages/Home/VideoGallery';
import MusicGallery from 'components/Pages/Home/MusicGallery';
import useStyles from './style';

const Home = () => {
	const classes = useStyles();
	return (
		<main className={classes.home}>
			<SearchBar />
			<Switch>
				<Route exact path={[ '/', '/photos' ]} component={PictureGallery} />
				<Route exact path="/illustrations" component={ArtworkGallery} />
				<Route exact path="/videos" component={VideoGallery} />
				<Route exact path="/musiques" component={MusicGallery} />
			</Switch>
		</main>
	);
};

export default Home;
