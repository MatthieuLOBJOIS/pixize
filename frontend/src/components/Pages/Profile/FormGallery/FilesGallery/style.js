import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	root: {
		width: '100vw',
		padding: '1em'
	},
	titleStock: {
		textAlign: 'center',
		fontSize: '2em'
	},
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
	},

	imageBlock: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	image: {
		margin: '0.5em',
		'@media (min-width: 600px)': {
			maxWidth: '400px'
		},
		'@media (max-width: 599px)': {
			maxWidth: '200px'
		}
	},

	videoBlock: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	video: {
		margin: '0.5em',
		'@media (min-width: 600px)': {
			maxWidth: '500px'
		},
		'@media (max-width: 599px)': {
			maxWidth: '250px'
		}
	}
});

export default useStyles;
