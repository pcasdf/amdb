import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  body: {
    width: '90%',
    margin: '30px auto',
    paddingTop: '90px'
  },
  profile: {
    height: '100px'
  },
  info: {
    paddingLeft: '4vw',
    paddingTop: '30px',
    fontSize: '.9rem'
  },
  title: {
    marginBottom: '20px',
    fontWeight: '600',
    fontSize: '2rem',
    color: '#136'
  },
  bio: {
    marginBottom: '20px'
  },
  label: {
    fontSize: '1.2rem',
    fontWeight: '500',
    marginBottom: '12px',
    color: '#136'
  },
  sublabel: {
    fontSize: '1rem',
    fontWeight: '500',
    margin: '15px 0 5px 0',
    color: '#136'
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
  knownFor: {
    height: '28vw',
    alignContent: 'flex-start'
  },
  profiles: {
    height: '20vw',
    marginBottom: '30px'
  },
  button: {
    margin: '20px auto 0 auto'
  }
});
