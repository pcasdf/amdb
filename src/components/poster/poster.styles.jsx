import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    width: '80%',
    padding: 0,
    margin: '0 auto',
    marginBottom: '15px',
    '@media (max-width: 900px)': {
      width: '50%',
      height: 'auto'
    }
  },
  media: {
    width: '100%',
    height: 'auto',
    '@media (max-width: 900px)': {
      width: '100%',
      height: 'auto'
    }
  }
});
