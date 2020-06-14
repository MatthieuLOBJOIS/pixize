import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	menu: {
		width: '100%',
		'@media (max-width: 599px)': {
			position: 'fixed',
			bottom: 0,
			left: 0,
			display: 'flex',
			justifyContent: 'flex-start',
			backgroundColor: '#F7C873 !important'
		}
	},
	link: {
		'@media (max-width: 599px)': {
			width: '25%'
		}
	}
});

export default useStyles;
