import React, { useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import useStyles from './style';

const MenuNav = () => {
	const classes = useStyles();
	const [ activeItem, setActiveItem ] = useState('picture');
	const handleItemClick = (e, { name }) => {
		setActiveItem(name);
	};

	return (
		<Menu.Menu className={classes.menu}>
			<Menu.Item
				className={classes.item}
				name="picture"
				active={activeItem === 'picture'}
				color="grey"
				onClick={handleItemClick}
			>
				<Icon name="picture" size="big" />
			</Menu.Item>
			<Menu.Item
				className={classes.item}
				name="pencil alternate"
				active={activeItem === 'pencil alternate'}
				color="grey"
				onClick={handleItemClick}
			>
				<Icon name="pencil alternate" size="big" />
			</Menu.Item>
			<Menu.Item
				className={classes.item}
				name="video"
				active={activeItem === 'video'}
				color="grey"
				onClick={handleItemClick}
			>
				<Icon name="video" size="big" />
			</Menu.Item>
			<Menu.Item
				className={classes.item}
				name="music"
				active={activeItem === 'music'}
				color="grey"
				onClick={handleItemClick}
			>
				<Icon name="music" size="big" />
			</Menu.Item>
		</Menu.Menu>
	);
};

export default MenuNav;
