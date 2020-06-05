import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  body: {
    width: '100%',
    margin: '30px auto',
    paddingTop: '60px'
  },
  head: {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#126'
  },
  content: {
    width: '80%',
    '@media (max-width: 950px)': {
      marginLeft: '10vw'
    }
  }
});
