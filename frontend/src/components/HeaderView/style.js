import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	header: {
		height: '20%',
		'@media (max-width: 599px)': {}
	},
	headerMenu: {
		backgroundColor: '#F7C873 !important',
		height: '80%',
		width: '100%',
		display: 'flex',
		'@media (max-width: 599px)': {}
	}
});

export default useStyles;
