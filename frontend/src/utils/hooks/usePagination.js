import { useState, useRef } from 'react';

const usePagination = (listElement, fileArray) => {
	const [activePage, setActivePage] = useState(1);
	const itemsPerPageRef = useRef(5);

	const onPageChange = (e, pageInfo) => {
		setActivePage(pageInfo.activePage);
	};

	const totalPages = Math.ceil(fileArray.length / itemsPerPageRef.current);

	const items = listElement.slice(
		(activePage - 1) * itemsPerPageRef.current,
		(activePage - 1) * itemsPerPageRef.current + itemsPerPageRef.current
	);

	return { activePage, onPageChange, totalPages, items };
};

export default usePagination;
