import React from 'react';
import { Divider, Pagination } from 'semantic-ui-react';

import useSearch from 'utils/hooks/useSearch';
import usePagination from 'utils/hooks/usePagination';
import useStyles from './style';

const PictureGallery = ({ imageArray, searchValue }) => {
	const classes = useStyles();
	const search = useSearch(searchValue, imageArray);

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

	const pagination = usePagination(listPicture, imageArray);

	return (
		<div className={classes.root}>
			<Divider hidden />
			<div className={classes.imageBlock}>{pagination.items}</div>
			<Pagination
				className={classes.pagination}
				activePage={pagination.activePage}
				onPageChange={pagination.onPageChange}
				boundaryRange={0}
				ellipsisItem={null}
				firstItem={null}
				lastItem={null}
				siblingRange={1}
				totalPages={pagination.totalPages}
			/>
		</div>
	);
};

export default PictureGallery;
