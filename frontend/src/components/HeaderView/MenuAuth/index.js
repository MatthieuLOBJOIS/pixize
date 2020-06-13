import React from 'react';
import { Menu } from 'semantic-ui-react';

import useStyles from './style';

const MenuAuth = () => {
	const classes = useStyles();
	return (
		<Menu.Menu className={classes.menu}>
			<Menu.Item position="right">menu d'authentification</Menu.Item>
		</Menu.Menu>
	);
};

export default MenuAuth;
