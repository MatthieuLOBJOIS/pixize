import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	audio: {
		width: '100%'
	},
	audioBlock: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%'
	},
	audioElement: {
		width: '80%',
		margin: '0.5em'
	}
});

export default useStyles;
