import { createUseStyles } from 'react-jss';

const rulesAccount = {
	position: 'fixed',
	width: '100vw',
	padding: '6em',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	transition: 'left 1s',
	backgroundColor: 'white',
};

const useStyles = createUseStyles({
	accountHidden: {
		left: '-100%',
		...rulesAccount,
	},

	accountDisplay: {
		left: '50%',
		...rulesAccount,
	},
});

export default useStyles;
