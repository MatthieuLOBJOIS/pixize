import { createUseStyles } from 'react-jss';

const rulesGallery = {
	position: 'fixed',
	width: '100vw',
	maxHeight: '50vh',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	transition: 'left 1s',
	backgroundColor: 'white',
	display: 'flex'
};

const useStyles = createUseStyles({
	galleryHidden: {
		left: '-100%',
		...rulesGallery
	},

	galleryDisplay: {
		left: '50%',
		...rulesGallery
	},

	iconGallery: {
		cursor: 'pointer',
		'@media (min-width: 600px)': {
			fontSize: '15em'
		},
		'@media (max-width: 599px)': {
			fontSize: '5em'
		}
	}
});

export default useStyles;
