import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  overhead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90vw',
    height: '300px',
    margin: '0 auto'
  },
  icon: {
    transform: 'scale(2.2)',
    color: '#aaa',
    height: '30px',
    borderRadius: '2px',
    position: 'relative',
    top: '35%',
    '&:hover': {
      color: '#248'
    }
  },
  slider: {
    margin: 'auto 0'
  }
});
