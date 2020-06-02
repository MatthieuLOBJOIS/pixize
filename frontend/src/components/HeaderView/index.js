import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import useStyles from './style';
import MenuNav from './MenuNav';
import MenuAuth from './MenuAuth';

const HeaderView = () => {
  const classes = useStyles();
  return (
    <Segment className={classes.header}>
      <Grid className={classes.headerGrid}>
        <Grid.Column className={classes.headerGridNav}>
          <MenuNav />
        </Grid.Column>
        <Grid.Column>
          <MenuAuth />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default HeaderView;
