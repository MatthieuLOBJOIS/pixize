import React from 'react';
import { Segment, Menu, Image, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import MenuNav from 'containers/HeaderView/MenuNav';
import MenuAuth from 'components/HeaderView/MenuAuth';
import logo from 'assets/picture/logo.png';
import useStyles from './style';

const HeaderView = () => {
	const classes = useStyles();
	return (
		<Segment className={classes.header}>
			<Menu className={classes.headerMenu}>
				<Responsive as={Menu.Item} minWidth={375}>
					<Link to="/">
						<Image src={logo} size="tiny" />
					</Link>
				</Responsive>
				<Responsive as={Menu.Item} maxWidth={374}>
					<Link to="/">
						<Image src={logo} size="mini" />
					</Link>
				</Responsive>
				<MenuNav />
				<MenuAuth />
			</Menu>
		</Segment>
	);
};

export default HeaderView;
