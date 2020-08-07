import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	root: {
		height: '70vh',

		'@media (min-width: 600px)': {
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center',
		},
		'@media (max-width: 599px)': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
		},
	},
});

export default useStyles;
