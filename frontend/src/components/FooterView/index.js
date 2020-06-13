import React from 'react';
import { Segment, Responsive } from 'semantic-ui-react';

import useStyles from './style';

const FooterView = () => {
	const classes = useStyles();
	return (
		<Responsive className={classes.footer} as={Segment} minWidth={600}>
			Footer
		</Responsive>
	);
};

export default FooterView;
