import React from 'react';
import { Segment, Grid, Menu } from 'semantic-ui-react';

import useStyles from './style';
import MenuNav from './MenuNav';
import MenuAuth from './MenuAuth';

const HeaderView = () => {
  const classes = useStyles();
  return (
    <Segment className={classes.header}>
      <Menu className={classes.headerMenu}>
        <MenuNav />
        <MenuAuth />
      </Menu>
    </Segment>
  );
};

export default HeaderView;
