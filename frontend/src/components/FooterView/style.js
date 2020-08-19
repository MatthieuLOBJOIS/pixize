import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	footer: {
		backgroundColor: '#564B3F !important',
		height: '10%',
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',

		'@media (min-width: 600px)': {},
		'@media (max-width: 599px)': {
			paddingBottom: '5em !important',
		},
	},
	linkBlock: {
		width: '80%',
		display: 'flex',
		justifyContent: 'space-around',
	},
	link: {
		color: '#EFC26F !important',
		'&:hover': {
			color: 'orange !important',
			textDecoration: 'underline',
		},
	},
});

export default useStyles;
