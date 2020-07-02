import React, { useState, useRef } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import useStyles from './style';

const MenuAuth = () => {
	const classes = useStyles();
	const history = useHistory();
	const [ darkMode, setDarkMode ] = useState(false);
	const refConnect = useRef(localStorage.getItem('isConnect') || '');
	console.log(refConnect, 'ref');

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
				default:
					console.log('auth');
			}
		};
	};

	return (
		<Menu.Menu className={classes.menu}>
			{refConnect.current !== '200' ? (
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
					<Button basic color="orange">
						Profil
					</Button>

					<Button basic color="grey">
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
		</Menu.Menu>
	);
};

export default MenuAuth;
