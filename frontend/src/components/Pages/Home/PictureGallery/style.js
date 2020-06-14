import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	group: {
		maxHeight: '60vh',
		overflow: 'scroll'
	},
	picture: {
		'&:hover': {
			filter: 'grayscale(100%)'
		}
	}
});

export default useStyles;
