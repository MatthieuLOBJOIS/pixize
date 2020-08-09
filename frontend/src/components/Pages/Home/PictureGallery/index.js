import React, { useState, useRef } from 'react';
import { Divider, Pagination } from 'semantic-ui-react';

import useStyles from './style';

const PictureGallery = ({ imageArray }) => {
	const classes = useStyles();

	const [ activePage, setActivePage ] = useState(1);
	const itemsPerPageRef = useRef(5);

	const listPicture = imageArray.map((stock) => {
		return (
			<div className={classes.imageElement} key={stock.filename}>
				<img className={classes.image} src={stock.stockUrl} alt={stock.filename} />
			</div>
		);
	});

	const items = listPicture.slice(
		(activePage - 1) * itemsPerPageRef.current,
		(activePage - 1) * itemsPerPageRef.current + itemsPerPageRef.current
	);
	console.log(Math.round(imageArray.length / itemsPerPageRef.current), imageArray.length);

	const onChange = (e, pageInfo) => {
		setActivePage(pageInfo.activePage);
	};

	return (
		<div className={classes.root}>
			<Divider hidden />
			<div className={classes.imageBlock}>{items}</div>
			<Pagination
				className={classes.pagination}
				activePage={activePage}
				onPageChange={onChange}
				boundaryRange={0}
				ellipsisItem={null}
				firstItem={null}
				lastItem={null}
				siblingRange={1}
				totalPages={Math.ceil(imageArray.length / itemsPerPageRef.current)}
			/>
		</div>
	);
};

export default PictureGallery;
