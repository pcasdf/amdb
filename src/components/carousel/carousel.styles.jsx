import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  overhead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '300px'
  },
  icon: {
    transform: 'scale(1.6)',
    color: '#112244',
    marginLeft: '10px',
    height: '30px',
    border: '1px solid',
    borderRadius: '2px',
    '&:hover': {
      color: '#2288FF'
    }
  },
  arrow: {
    position: 'relative',
    top: '40%'
  },
  slider: {
    margin: 'auto 0'
  }
});
