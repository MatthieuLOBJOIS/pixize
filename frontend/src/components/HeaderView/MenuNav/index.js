import React, { useState } from 'react';
import { Menu, Icon, Popup } from 'semantic-ui-react';
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
				<Popup
					trigger={
						<Menu.Item
							className={classes.item}
							name="picture"
							active={activeItem === 'picture'}
							color="grey"
							onClick={handleItemClick}
						>
							<Icon name="picture" size="big" />
						</Menu.Item>
					}
					content="Images"
					position="bottom center"
				/>
			</NavLink>

			<NavLink className={classes.link} to="/illustrations">
				<Popup
					trigger={
						<Menu.Item
							className={classes.item}
							name="pencil alternate"
							active={activeItem === 'pencil alternate'}
							color="grey"
							onClick={handleItemClick}
						>
							<Icon name="pencil alternate" size="big" />
						</Menu.Item>
					}
					content="Illustrations"
					position="bottom center"
				/>
			</NavLink>

			<NavLink className={classes.link} to="/videos">
				<Popup
					trigger={
						<Menu.Item
							className={classes.item}
							name="video"
							active={activeItem === 'video'}
							color="grey"
							onClick={handleItemClick}
						>
							<Icon name="video" size="big" />
						</Menu.Item>
					}
					content="Vidéos"
					position="bottom center"
				/>
			</NavLink>

			<NavLink className={classes.link} to="/musiques">
				<Popup
					trigger={
						<Menu.Item
							className={classes.item}
							name="music"
							active={activeItem === 'music'}
							color="grey"
							onClick={handleItemClick}
						>
							<Icon name="music" size="big" />
						</Menu.Item>
					}
					content="Musiques"
					position="bottom center"
				/>
			</NavLink>
		</Menu.Menu>
	);
};

export default MenuNav;
