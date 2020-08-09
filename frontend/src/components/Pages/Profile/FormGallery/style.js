import { createUseStyles } from 'react-jss';

const rulesGallery = {
	position: 'fixed',
	overflowY: 'scroll',
	overflowX: 'hidden',
	width: '100vw',
	maxHeight: '70vh',
	top: '60%',
	transform: 'translate(-50%, -50%)',
	transition: 'left 1s',
	backgroundColor: 'white',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
};

const useStyles = createUseStyles({
	galleryHidden: {
		left: '-100%',
		...rulesGallery,
	},

	galleryDisplay: {
		left: '50%',
		...rulesGallery,
	},

	iconGallery: {
		cursor: 'pointer',
		'@media (min-width: 600px)': {
			fontSize: '15em',
		},
		'@media (max-width: 599px)': {
			fontSize: '5em',
		},
	},

	iconClose: {
		cursor: 'pointer',
	},
});

export default useStyles;
