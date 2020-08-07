import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	imageBlock: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
	imageElement: {
		margin: '0.5em',
	},
	image: {
		display: 'block',
		margin: 'auto',
		'@media (min-width: 600px)': {
			maxWidth: '400px',
		},
		'@media (max-width: 599px)': {
			maxWidth: '300px',
		},
		'&:hover': {
			filter: 'grayscale(100%)',
		},
	},
});

export default useStyles;
