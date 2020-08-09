const fileTypeFilter = (stockArray) => {
	const imageArray = [];
	const audioArray = [];
	const videoArray = [];
	const artworkArray = [];

	stockArray.map((stock) => {
		const fileType = stock.mimetype.split('/')[0];
		switch (fileType) {
			case 'image': {
				if (stock.mimetype === 'image/svg+xml') {
					artworkArray.push(stock);
				} else {
					imageArray.push(stock);
				}
				break;
			}
			case 'audio': {
				audioArray.push(stock);
				break;
			}
			case 'video': {
				videoArray.push(stock);
				break;
			}
			default:
				console.log('fileType not found');
		}
	});
	return {
		image: imageArray,
		audio: audioArray,
		artwork: artworkArray,
		video: videoArray,
	};
};

export default fileTypeFilter;
