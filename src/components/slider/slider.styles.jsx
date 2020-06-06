import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  label: {
    fontSize: '0.9rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  rating: {
    display: 'flex'
  },
  vote: {
    margin: 'auto 5px'
  },
  icon: {
    fill: '#f5c518',
    margin: 'auto'
  },
  poster: {
    '&:hover': {
      opacity: '0.7'
    }
  }
});
