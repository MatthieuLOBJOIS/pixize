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
import useStyles from './style';

const App = ({ createdUser, connectedUser, clearField }) => {
	const history = useHistory();
	const classes = useStyles();

	useEffect(
		() => {
			if (createdUser.status === 201) {
				//console.log(createdUser);
				history.push('/');
				toast({
					type: 'success',
					color: '',
					icon: 'check',
					title: `Votre compte a été créé avec succès, vous pouvez vous connecter.`,
					animation: 'bounce',
					time: 5000,
					onClose: () => clearField(),
					onClick: () => alert('you click on the toast'),
					onDismiss: () => alert('you have dismissed this toast')
				});
			}

			if (createdUser.status === 400) {
				toast({
					type: 'error',
					color: 'red',
					icon: 'close',
					title: "Echec de l'inscription.",
					animation: 'bounce',
					time: 5000,
					onClose: () => alert('toast is close'),
					onClick: () => alert('you click on the toast'),
					onDismiss: () => alert('you have dismissed this toast')
				});
			}
		},
		[ createdUser ]
	);

	useEffect(
		() => {
			console.log(connectedUser);
			if (connectedUser.status === 200) {
				history.push('/');
				toast({
					type: 'info',
					color: 'brown',
					icon: 'check',
					title: `${connectedUser.message}`,
					animation: 'bounce',
					time: 5000,
					//onClose: () => alert('toast is close'),
					onClick: () => alert('you click on the toast'),
					onDismiss: () => alert('you have dismissed this toast')
				});
			}

			if (connectedUser.status === 401) {
				toast({
					type: 'error',
					color: 'red',
					icon: 'close',
					title: `${connectedUser.message}`,
					animation: 'bounce',
					time: 5000,
					//onClose: () => alert('toast is close'),
					onClick: () => alert('you click on the toast'),
					onDismiss: () => alert('you have dismissed this toast')
				});
			}
		},
		[ connectedUser ]
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
	}).isRequired,
	clearField: PropTypes.func.isRequired
};

export default App;
