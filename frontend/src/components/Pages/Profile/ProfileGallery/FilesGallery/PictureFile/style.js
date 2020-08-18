import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	imageBlock: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	imageElement: {
		margin: '0.5em'
	},
	image: {
		display: 'block',
		margin: 'auto',
		'@media (min-width: 600px)': {
			maxWidth: '400px'
		},
		'@media (max-width: 599px)': {
			maxWidth: '200px'
		}
	},
	imageHover: {
		filter: 'grayscale(100%)'
	},
	deleteImage: {
		fontSize: '3em',
		color: 'black',
		position: 'absolute',
		cursor: 'pointer',
		opacity: '70%',
		zIndex: 1000,
		'&:hover': {
			color: 'red'
		}
	},
	deleteImageHidden: {
		display: 'none'
	}
});

export default useStyles;
