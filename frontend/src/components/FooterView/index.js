import React from 'react';
import { Segment } from 'semantic-ui-react';

import useStyles from './style';

const FooterView = () => {
  const classes = useStyles();
  return <Segment className={classes.footer}>Footer</Segment>;
};

export default FooterView;
