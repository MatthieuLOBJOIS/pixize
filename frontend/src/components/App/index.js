import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import HeaderView from 'components/HeaderView';
import FooterView from 'components/FooterView';
import Home from 'components/Pages/Home';
import Register from 'containers/Pages/Register';
import NotFound from 'components/Pages/NotFound';
import useStyles from './style';

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
						<Route
							exact
							path={[ '/', '/photos', '/illustrations', '/videos', '/musiques' ]}
							component={Home}
						/>
						<Route exact path="/inscription" component={Register} />
						<Route component={NotFound} />
					</Switch>
				</Segment>
				<FooterView />
			</Segment.Group>
		</div>
	);
};

export default App;
