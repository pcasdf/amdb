import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  title: {
    marginBottom: '20px',
    fontWeight: '600',
    fontSize: '2rem',
    color: '#248'
  },
  bio: {
    marginBottom: '20px'
  },
  knownFor: {
    height: '28vw',
    alignContent: 'flex-start'
  },
  poster: {
    height: '20vw',
    width: 'auto',
    boxShadow: '3px 3px 6px #ccc',
    borderRadius: '5px',
    '&:hover': {
      opacity: '0.7',
      cursor: 'pointer'
    }
  },
  label: {
    fontSize: '1.2rem',
    fontWeight: '500',
    marginBottom: '12px',
    color: '#248'
  }
});
