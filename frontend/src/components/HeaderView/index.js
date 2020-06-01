import React from 'react';
import { Segment } from 'semantic-ui-react';

import useStyles from './style';
import MenuNav from './MenuNav';
import MenuAuth from './MenuAuth';

const HeaderView = () => {
  const classes = useStyles();
  return (
    <Segment className={classes.header}>
      <MenuNav />
      <MenuAuth />
    </Segment>
  );
};

export default HeaderView;
