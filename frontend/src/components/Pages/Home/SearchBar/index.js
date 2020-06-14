import React from 'react';
import { Search } from 'semantic-ui-react';

import useStyles from './style';

const SearchBar = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Search className={classes.search} input={{ fluid: true }} />
		</div>
	);
};

export default SearchBar;
