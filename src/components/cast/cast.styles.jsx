import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    width: '80%',
    margin: '0 auto',
    justifyContent: 'center',
    textAlign: 'center'
  },
  profile: {
    justifyContent: 'center',
    '&:hover': {
      opacity: '0.7'
    }
  },
  label: {
    fontWeight: '500',
    color: '#248'
  }
});
