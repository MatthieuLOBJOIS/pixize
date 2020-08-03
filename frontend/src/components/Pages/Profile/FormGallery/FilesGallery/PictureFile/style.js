import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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
	}
});

export default useStyles;
