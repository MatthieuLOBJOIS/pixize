import React from 'react';
import { Segment, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import useStyles from './style';

const FooterView = () => {
	const classes = useStyles();
	return (
		<Segment className={classes.footer}>
			<div className={classes.linkBlock}>
				<Link className={classes.link} to="/info">
					Qui somme nous ?
				</Link>
				<Link className={classes.link} to="/mention-legal">
					Mention Légal
				</Link>
				<Link className={classes.link} to="/contact">
					Contact
				</Link>
			</div>
			<p>&copy; Pixize 2020</p>
		</Segment>
	);
};

export default FooterView;
