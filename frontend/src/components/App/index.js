import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

import HeaderView from 'components/HeaderView';
import FooterView from 'components/FooterView';
import Home from 'components/Pages/Home';
import Register from 'containers/Pages/Register';
import Login from 'containers/Pages/Login';
import NotFound from 'components/Pages/NotFound';
import Profile from 'components/Pages/Profile';
import useStyles from './style';

const App = ({ alertToast, userAuth, userCreat, clearField }) => {
	const history = useHistory();
	const classes = useStyles();

	useEffect(
		() => {
			if (userAuth !== '' || userCreat !== '') {
				if (userAuth === 'isConnect' || userCreat === 'isCreat') {
					history.push('/');
					clearField();
				}

				toast({
					...alertToast,
					animation: 'bounce',
					time: 5000,
					onClose: () => console.log('close'),
					onClick: () => alert('you click on the toast'),
					onDismiss: () => alert('you have dismissed this toast')
				});
			}
		},
		[ userAuth, userCreat ]
	);

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
						<Route exact path="/profil" component={Profile} />
						<Route component={NotFound} />
					</Switch>
				</Segment>
				<FooterView />
			</Segment.Group>
		</div>
	);
};

App.propTypes = {
	userAuth: PropTypes.string.isRequired,
	userCreat: PropTypes.string.isRequired,
	alertToast: PropTypes.shape({
		type: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}).isRequired
};

export default App;
