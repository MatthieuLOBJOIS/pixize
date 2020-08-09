import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	home: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		minHeight: '80vh',
		'@media (max-width: 599px)': {
			paddingBottom: '5em',
		},
	},
});

export default useStyles;
