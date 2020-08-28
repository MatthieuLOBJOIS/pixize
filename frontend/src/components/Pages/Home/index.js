import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchBar from 'containers/Pages/Home/SearchBar';
import PictureGallery from 'components/Pages/Home/PictureGallery';
import ArtworkGallery from 'components/Pages/Home/ArtworkGallery';
import VideoGallery from 'components/Pages/Home/VideoGallery';
import MusicGallery from 'components/Pages/Home/MusicGallery';

import fileTypeFilter from 'utils/fileTypeFilter';

import useStyles from './style';

const Home = ({ getAllStock, allStock, searchValue }) => {
	const classes = useStyles();

	useEffect(() => {
		getAllStock();
	}, []);

	const fileArray = fileTypeFilter(allStock);

	return (
		<main className={classes.home}>
			<SearchBar />
			<Switch>
				<Route
					exact
					path={['/', '/photos']}
					render={() => (
						<PictureGallery
							searchValue={searchValue}
							imageArray={fileArray.image}
						/>
					)}
				/>
				<Route
					exact
					path="/illustrations"
					render={() => <ArtworkGallery imageArray={fileArray.artwork} />}
				/>
				<Route
					exact
					path="/videos"
					render={() => <VideoGallery imageArray={fileArray.video} />}
				/>
				<Route
					exact
					path="/musiques"
					render={() => <MusicGallery imageArray={fileArray.audio} />}
				/>
			</Switch>
		</main>
	);
};

Home.propTypes = {
	getAllStock: PropTypes.func.isRequired,
};

export default Home;
