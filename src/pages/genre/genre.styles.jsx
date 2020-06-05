import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  body: {
    width: '100%',
    margin: '30px auto',
    paddingTop: '60px'
  },
  label: {
    margin: 'auto 5px',
    color: '#126',
    fontWeight: '600',
    fontSize: '1.4rem'
  },
  content: {
    width: '80%',
    '@media (max-width: 950px)': {
      marginLeft: '10vw'
    }
  }
});
