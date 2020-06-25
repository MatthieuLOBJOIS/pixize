import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import HeaderView from 'components/HeaderView';
import FooterView from 'components/FooterView';
import Home from 'components/Pages/Home';
import Register from 'containers/Pages/Register';
import NotFound from 'components/Pages/NotFound';
import useStyles from './style';

const App = ({ getAllStock, createdUser }) => {
	const history = useHistory();
	const classes = useStyles();

	useEffect(() => {
		getAllStock();
	}, []);

	useEffect(
		() => {
			if (createdUser.status === 201) {
				//console.log(createdUser);
				history.push('/');
			}
		},
		[ createdUser ]
	);

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

Register.propTypes = {
	createdUser: PropTypes.shape({
		status: PropTypes.number.isRequired,
		message: PropTypes.string.isRequired
	}).isRequired
};

export default App;
