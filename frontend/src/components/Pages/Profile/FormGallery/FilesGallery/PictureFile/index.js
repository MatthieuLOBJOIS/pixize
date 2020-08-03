import React from 'react';
import useStyles from './style';

const PictureFile = ({ imageArray }) => {
	const classes = useStyles();

	const [ isShown, setIsShown ] = useState(false);

	const mouseEnter = () => {
		setIsShown(true);
	};

	const mouseLeave = () => {
		setIsShown(false);
	};

	return (
		<div className={classes.imageBlock}>
			{imageArray.length !== 0 ? (
				imageArray.map((stock) => {
					return (
						<div key={stock._id} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
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
