import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	header: {
		height: '20vh',
	},
	headerMenu: {
		position: 'fixed',
		zIndex: 1,
		backgroundColor: '#F7C873 !important',
		height: '15vh',
		width: '95vw',
		display: 'flex',
		right: 'calc(50% - 47.5vw)',
	},
});

export default useStyles;
