import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { SemanticToastContainer } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

import HeaderView from 'components/HeaderView';
import FooterView from 'components/FooterView';
import Home from 'containers/Pages/Home';
import Register from 'containers/Pages/Register';
import Login from 'containers/Pages/Login';
import NotFound from 'components/Pages/NotFound';
import ProfileAccount from 'containers/Pages/Profile/ProfileAccount';
import ProfileGallery from 'containers/Pages/Profile/ProfileGallery';

import useStyles from './style';

const App = ({ fetchAuth }) => {
	const classes = useStyles();

	useEffect(() => {
		fetchAuth();
	}, []);

	return (
		<div className={classes.container}>
			<Segment.Group className={classes.segmentGroup}>
				<HeaderView />
				<SemanticToastContainer position="top-center" />
				<Segment className={classes.segmentPages}>
					<Switch>
						<Route
							exact
							path={[ '/', '/photos', '/illustrations', '/videos', '/musiques' ]}
							component={Home}
						/>
						<Route exact path="/inscription" component={Register} />
						<Route exact path="/connexion" component={Login} />
						<Route exact path="/profil/compte" component={ProfileAccount} />
						<Route exact path="/profil/galerie" component={ProfileGallery} />
						<Route component={NotFound} />
					</Switch>
				</Segment>
				<FooterView />
			</Segment.Group>
		</div>
	);
};

App.propTypes = {
	fetchAuth: PropTypes.func.isRequired
};

export default App;
