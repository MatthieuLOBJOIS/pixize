import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import logo from '../../../assets/picture/logo.png';

import useStyles from './style';

const MenuNav = () => {
  const classes = useStyles();
  return (
    <Menu.Item>
      <Image src={logo} size="tiny" />
    </Menu.Item>
  );
};

export default MenuNav;
