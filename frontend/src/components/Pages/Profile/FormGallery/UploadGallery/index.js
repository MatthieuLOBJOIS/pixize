import React, { useEffect } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { Button } from 'semantic-ui-react';
import PropTypes, { object } from 'prop-types';

import useStyles from './style';

const UploadGallery = ({ uploadFiles, onChangeFiles, stocksCurrentUser, fetchStocksCurrentUser }) => {
	const classes = useStyles();
	useEffect(() => {
		fetchStocksCurrentUser();
	}, []);

	return (
		<div>
			<form onSubmit={uploadFiles}>
				<h1>{'Montre-nous tes oeuvres ! :)'}</h1>

				<input type="file" name="multi-files" multiple onChange={onChangeFiles} />

				<Button type="submit" color="orange">
					Envoyer <FiUploadCloud className={classes.iconUpload} />
				</Button>
			</form>
			<div>
				{stocksCurrentUser.map((stock) => {
					console.log(stock, 'component');
					return (
						<img
							style={{ width: '100px', height: '100px' }}
							key={stock._id}
							src={stock.stockUrl}
							alt={stock.filename}
						/>
					);
				})}
			</div>
		</div>
	);
};

UploadGallery.propTypes = {
	uploadFiles: PropTypes.func.isRequired,
	onChangeFiles: PropTypes.func.isRequired,
	stocksCurrentUser: PropTypes.arrayOf(object).isRequired,
	fetchStocksCurrentUser: PropTypes.func.isRequired
};

export default UploadGallery;
