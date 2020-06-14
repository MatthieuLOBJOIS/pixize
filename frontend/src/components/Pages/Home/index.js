import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchBar from './SearchBar';
import PictureGallery from './PictureGallery';

const Home = () => {
	return (
		<div>
			<SearchBar />
			<PictureGallery />
		</div>
	);
};

export default Home;
