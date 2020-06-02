import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    backgroundColor: 'blue',
    height: '20%',
    color: 'white',
  },
  headerGrid: {
    height: '100%',
    display: 'flex',
  },
  headerGridNav: {
    flex: 1,
  },
});

export default useStyles;
