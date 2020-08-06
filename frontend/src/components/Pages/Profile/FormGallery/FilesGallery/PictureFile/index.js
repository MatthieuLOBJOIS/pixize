import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import classNames from 'classnames';

import useStyles from './style';

const PictureFile = ({ imageArray }) => {
	const classes = useStyles();

	const [ isShown, setIsShown ] = useState({});

	const mouseEnter = (index) => {
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
					const iconDeleteClass = classNames(
						{ [classes.deleteImage]: isShown[index] },
						{ [classes.deleteImageHidden]: !isShown[index] }
					);
					return (
						<div
							onMouseEnter={mouseEnter(index)}
							onMouseLeave={mouseLeave(index)}
							className={classes.imageElement}
							key={stock._id}
						>
							<MdDelete className={iconDeleteClass} />
							<img className={classes.image} src={stock.stockUrl} alt={stock.filename} />
						</div>
					);
				})
			) : (
				<p>Aucune photo dans la galerie</p>
			)}
		</div>
	);
};

export default PictureFile;
