import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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
