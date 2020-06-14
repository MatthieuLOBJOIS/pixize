import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	menu: {},
	item: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	darkMode: {
		cursor: 'pointer'
	}
});

export default useStyles;
