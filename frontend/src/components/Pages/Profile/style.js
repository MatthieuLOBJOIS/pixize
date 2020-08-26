import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	title: {
		textAlign: 'center'
	},
	closeModalIcon: {
		margin: '0 !important',
		textAlign: 'center',
		'@media (min-width: 600px)': {
			fontSize: '2em !important'
		},
		'@media (max-width: 599px)': {
			fontSize: '1em !important'
		}
	},
	closeModalButton: {
		cursor: 'pointer',
		'@media (min-width: 600px)': {
			width: '70px',
			height: '70px',
			borderRadius: '50% !important'
		},
		'@media (max-width: 599px)': {
			width: '50px',
			height: '50px',
			borderRadius: '50% !important'
		}
	},
	action: {
		display: 'flex',
		justifyContent: 'center'
	},
	iconGallery: {
		cursor: 'pointer',
		'@media (min-width: 600px)': {
			fontSize: '10em'
		},
		'@media (max-width: 599px)': {
			fontSize: '5em'
		}
	},
	buttonGallery: {
		cursor: 'pointer'
	},
	iconAccount: {
		cursor: 'pointer',
		'@media (min-width: 600px)': {
			fontSize: '10em'
		},
		'@media (max-width: 599px)': {
			fontSize: '5em'
		}
	},
	buttonAccount: {
		cursor: 'pointer'
	}
});

export default useStyles;
