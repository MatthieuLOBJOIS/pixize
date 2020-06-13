import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

import useStyles from './style';
import HeaderView from '../HeaderView';
import FooterView from '../FooterView';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';

const App = ({ getAllStock }) => {
	useEffect(() => {
		getAllStock();
	});
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Segment.Group className={classes.segmentGroup}>
				<HeaderView />
				<Segment className={classes.segmentPages}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route component={NotFound} />
					</Switch>
				</Segment>
				<FooterView />
			</Segment.Group>
		</div>
	);
};

export default App;
