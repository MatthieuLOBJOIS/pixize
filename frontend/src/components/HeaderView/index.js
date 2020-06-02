import React from 'react';
import { Segment, Menu, Image } from 'semantic-ui-react';

import useStyles from './style';
import MenuNav from '../../containers/HeaderView/MenuNav';
import MenuAuth from './MenuAuth';
import logo from '../../assets/picture/logo.png';

const HeaderView = () => {
  const classes = useStyles();
  return (
    <Segment className={classes.header}>
      <Menu className={classes.headerMenu}>
        <Menu.Item>
          <Image src={logo} size="tiny" />
        </Menu.Item>
        <MenuNav />
        <MenuAuth />
      </Menu>
    </Segment>
  );
};

export default HeaderView;
