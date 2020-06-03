import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  overhead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  icon: {
    transform: 'scale(1.8)',
    color: '#112244',
    margin: 'auto 20px'
  },
  arrow: {
    display: 'flex',
    justifyContent: 'center'
  }
});
