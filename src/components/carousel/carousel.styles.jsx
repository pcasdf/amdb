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
    margin: 'auto 0',
    height: '30px',
    border: '1px solid',
    borderRadius: '3px'
  },
  arrow: {
    display: 'flex',
    justifyContent: 'center'
  },
  slider: {
    margin: 'auto 0'
  }
});
