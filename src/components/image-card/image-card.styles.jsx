import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    maxWidth: '345',
    padding: 0,
    marginBottom: '15px',
    '&:hover': {
      opacity: '0.7'
    }
  },
  media: {
    width: '100%',
    height: 'auto'
  }
});
