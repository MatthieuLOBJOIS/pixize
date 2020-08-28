import { useState, useEffect } from 'react';

const useSearch = (searchValue, arrayItem) => {
	const [arrayFile, setArrayFile] = useState([]);

	useEffect(() => {
		if (searchValue.length >= 1) {
			const result = arrayItem.filter((image) => {
				return image.filename.toLowerCase().includes(searchValue.toLowerCase());
			});
			setArrayFile(result);
		} else {
			setArrayFile(arrayItem);
		}
	}, [searchValue, arrayItem]);

	return arrayFile;
};

export default useSearch;
