import React, { useState, useRef } from 'react';
import { Divider, Pagination } from 'semantic-ui-react';

import useSearch from 'utils/hooks/useSearch';
import useStyles from './style';

const PictureGallery = ({ imageArray, searchValue }) => {
	const classes = useStyles();
	const search = useSearch(searchValue, imageArray);
	const [activePage, setActivePage] = useState(1);
	const itemsPerPageRef = useRef(5);
	const totalPages = Math.ceil(imageArray.length / itemsPerPageRef.current);

	const listPicture = search.map((stock) => {
		return (
			<div className={classes.imageElement} key={stock.filename}>
				<img
					className={classes.image}
					src={stock.stockUrl}
					alt={stock.filename}
				/>
			</div>
		);
	});

	const items = listPicture.slice(
		(activePage - 1) * itemsPerPageRef.current,
		(activePage - 1) * itemsPerPageRef.current + itemsPerPageRef.current
	);

	const onPageChange = (e, pageInfo) => {
		setActivePage(pageInfo.activePage);
	};

	return (
		<div className={classes.root}>
			<Divider hidden />
			<div className={classes.imageBlock}>{items}</div>
			<Pagination
				className={classes.pagination}
				activePage={activePage}
				onPageChange={onPageChange}
				boundaryRange={0}
				ellipsisItem={null}
				firstItem={null}
				lastItem={null}
				siblingRange={1}
				totalPages={totalPages}
			/>
		</div>
	);
};

export default PictureGallery;
