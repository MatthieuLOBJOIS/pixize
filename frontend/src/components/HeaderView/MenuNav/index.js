import React, { useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import useStyles from './style';

const MenuNav = () => {
	const classes = useStyles();
	const [ activeItem, setActiveItem ] = useState('');
	const handleItemClick = (e, { name }) => {
		setActiveItem(name);
	};

	return (
		<Menu.Menu className={classes.menu}>
			<NavLink className={classes.link} to="/photos">
				<Menu.Item name="picture" active={activeItem === 'picture'} color="grey" onClick={handleItemClick}>
					<Icon name="picture" size="big" />
				</Menu.Item>
			</NavLink>
			<NavLink className={classes.link} to="/illustrations">
				<Menu.Item
					name="pencil alternate"
					active={activeItem === 'pencil alternate'}
					color="grey"
					onClick={handleItemClick}
				>
					<Icon name="pencil alternate" size="big" />
				</Menu.Item>
			</NavLink>
			<NavLink className={classes.link} to="/videos">
				<Menu.Item name="video" active={activeItem === 'video'} color="grey" onClick={handleItemClick}>
					<Icon name="video" size="big" />
				</Menu.Item>
			</NavLink>
			<NavLink className={classes.link} to="/musiques">
				<Menu.Item name="music" active={activeItem === 'music'} color="grey" onClick={handleItemClick}>
					<Icon name="music" size="big" />
				</Menu.Item>
			</NavLink>
		</Menu.Menu>
	);
};

export default MenuNav;
