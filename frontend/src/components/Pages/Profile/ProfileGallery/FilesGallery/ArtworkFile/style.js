import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	artworkBlock: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	artwork: {
		margin: '0.5em',
		'@media (min-width: 600px)': {
			maxWidth: '400px'
		},
		'@media (max-width: 599px)': {
			maxWidth: '200px'
		}
	}
});

export default useStyles;
