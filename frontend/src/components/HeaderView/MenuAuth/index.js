import React, { useState } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';

import useStyles from './style';

const MenuAuth = () => {
	const classes = useStyles();
	const [ darkMode, setDarkMode ] = useState(false);

	const handleDarkMode = () => {
		switch (darkMode) {
			case false:
				setDarkMode(true);
				break;
			case true:
				setDarkMode(false);
				break;
		}
	};

	return (
		<Menu.Menu className={classes.menu}>
			<Menu.Item className={classes.item} position="right">
				<Button basic color="orange">
					Connexion
				</Button>

				<Button basic color="grey">
					Inscription
				</Button>
			</Menu.Item>
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
