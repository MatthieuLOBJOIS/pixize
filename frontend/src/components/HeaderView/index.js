import React from 'react';
import { Segment, Menu, Image, Responsive } from 'semantic-ui-react';

import useStyles from './style';
import MenuNav from '../../containers/HeaderView/MenuNav';
import MenuAuth from './MenuAuth';
import logo from '../../assets/picture/logo.png';

const HeaderView = () => {
	const classes = useStyles();
	return (
		<Segment className={classes.header}>
			<Menu className={classes.headerMenu}>
				<Responsive as={Menu.Item} minWidth={375}>
					<Image src={logo} size="tiny" />
				</Responsive>
				<Responsive as={Menu.Item} maxWidth={374}>
					<Image src={logo} size="mini" />
				</Responsive>
				<MenuNav />
				<MenuAuth />
			</Menu>
		</Segment>
	);
};

export default HeaderView;
