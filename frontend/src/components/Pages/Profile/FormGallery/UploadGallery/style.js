import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	rootUpload: {
		padding: '2em'
	},

	iconUpload: {
		fontSize: '3em'
	},

	formUpload: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},

	inputFile: {
		padding: '1em'
	}
});

export default useStyles;
