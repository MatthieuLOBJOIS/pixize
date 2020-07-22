import { createUseStyles } from 'react-jss';

const rulesGallery = {
	position: 'fixed',
	width: '100vw',
	padding: '6em',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	transition: 'left 1s',
	backgroundColor: 'white',
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
});

export default useStyles;
