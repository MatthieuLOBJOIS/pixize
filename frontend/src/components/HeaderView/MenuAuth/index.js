import React, { useState } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import Profile from 'containers/Pages/Profile';
import useStyles from './style';

const MenuAuth = ({ logoutUser, userAuth, currentUser }) => {
	const classes = useStyles();
	const history = useHistory();
	const [ darkMode, setDarkMode ] = useState(false);
	const [ displayModal, setDisplayModal ] = useState(false);

	const handleDarkMode = () => {
		switch (darkMode) {
			case false:
				setDarkMode(true);
				break;
			case true:
				setDarkMode(false);
				break;
			default:
				console.log('light');
		}
	};

	const handleAuthClick = (auth) => {
		return () => {
			switch (auth) {
				case 'login':
					history.push('/connexion');
					break;
				case 'register':
					history.push('/inscription');
					break;
				case 'settings':
					if (!currentUser.check) {
						history.push('/profil/compte');
					} else {
						setDisplayModal(true);
					}
					break;
				case 'logout':
					history.push('/');
					logoutUser();
					break;
				default:
					console.log('auth');
			}
		};
	};

	return (
		<Menu.Menu className={classes.menu}>
			{userAuth !== 'isConnect' ? (
				<Menu.Item className={classes.item} position="right">
					<Button onClick={handleAuthClick('login')} basic color="orange">
						Connexion
					</Button>

					<Button onClick={handleAuthClick('register')} basic color="grey">
						Inscription
					</Button>
				</Menu.Item>
			) : (
				<Menu.Item className={classes.item} position="right">
					<Button onClick={handleAuthClick('settings')} basic color="orange">
						Profil
					</Button>

					<Button onClick={handleAuthClick('logout')} basic color="grey">
						Déconnexion
					</Button>
				</Menu.Item>
			)}

			<Menu.Item>
				<Icon
					className={classes.darkMode}
					size="huge"
					color={darkMode === false && 'orange'}
					onClick={handleDarkMode}
					loading
					name={darkMode === false ? 'sun' : 'moon'}
				/>
			</Menu.Item>
			<Profile displayModal={displayModal} setDisplayModal={setDisplayModal} />
		</Menu.Menu>
	);
};

export default MenuAuth;
