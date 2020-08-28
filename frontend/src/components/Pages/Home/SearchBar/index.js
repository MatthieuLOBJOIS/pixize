import React from 'react';
import { Search } from 'semantic-ui-react';

import useStyles from './style';

const SearchBar = ({ searchValue, searchbarStock }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Search
				value={searchValue}
				onSearchChange={searchbarStock}
				className={classes.search}
				input={{ fluid: true }}
			/>
		</div>
	);
};

export default SearchBar;
