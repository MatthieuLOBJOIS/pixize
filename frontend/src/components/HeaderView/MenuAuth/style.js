import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	menu: {},
	item: {
		display: 'flex',

		'@media (max-width: 1249px)': {
			flexDirection: 'column',
			justifyContent: 'space-between',
		},
		'@media (min-width: 1250px)': {
			width: '20vw',
			justifyContent: 'space-around',
		},
	},
	darkMode: {
		cursor: 'pointer',
	},
});

export default useStyles;
