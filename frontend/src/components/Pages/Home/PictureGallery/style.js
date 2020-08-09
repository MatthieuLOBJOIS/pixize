import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	imageBlock: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		marginBottom: '2em'
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
			maxWidth: '300px'
		},
		'&:hover': {
			filter: 'grayscale(100%)'
		}
	},
	pagination: {
		backgroundColor: '#EFC26F !important'
	}
});

export default useStyles;
