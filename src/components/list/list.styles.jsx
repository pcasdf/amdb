import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  content: {
    width: '80%',
    '@media (max-width: 950px)': {
      marginLeft: '10vw'
    }
  },
  label: {
    fontSize: '1.4rem',
    fontWeight: '500',
    color: '#248'
  }
});
