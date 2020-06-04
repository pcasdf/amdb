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
    transform: 'scale(1.6)',
    color: '#112244',
    height: '30px',
    border: '1px solid',
    borderRadius: '2px',
    position: 'relative',
    top: '35%',
    '&:hover': {
      color: '#2288FF'
    }
  },
  slider: {
    margin: 'auto 0'
  }
});
