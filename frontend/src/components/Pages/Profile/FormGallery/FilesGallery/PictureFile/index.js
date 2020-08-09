import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import useStyles from './style';

const PictureFile = ({ imageArray, deleteFile }) => {
	const classes = useStyles();

	const [ isShown, setIsShown ] = useState({});

	const mouseHover = (index) => {
		return () => {
			setIsShown({ ...isShown, [index]: true });
		};
	};

	const mouseFocus = (index) => {
		return () => {
			setIsShown({ ...isShown, [index]: true });
		};
	};

	const mouseLeave = (index) => {
		return () => {
			setIsShown({ ...isShown, [index]: false });
		};
	};

	return (
		<div className={classes.imageBlock}>
			{imageArray.length !== 0 ? (
				imageArray.map((stock, index) => {
					const imageClasses = classNames(classes.image, {
						[classes.imageHover]: isShown[index]
					});

					return (
						<div
							onMouseOver={mouseHover(index)}
							onFocus={mouseFocus(index)}
							onMouseLeave={mouseLeave(index)}
							className={classes.imageElement}
							key={stock.filename}
						>
							{isShown[index] && (
								<MdDelete onClick={deleteFile(stock.path)} className={classes.deleteImage} />
							)}
							<img className={imageClasses} src={stock.stockUrl} alt={stock.filename} />
						</div>
					);
				})
			) : (
				<p>Aucune photo dans la galerie</p>
			)}
		</div>
	);
};

PictureFile.propTypes = {
	imageArray: PropTypes.func.isRequired,
	deleteFile: PropTypes.func.isRequired
};

export default PictureFile;
