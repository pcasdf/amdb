import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  content: {
    margin: '0 auto'
  },
  root: {
    width: '80%',
    padding: 0,
    margin: '0 50px',
    marginBottom: '15px'
  },
  media: {
    width: '100%',
    height: 'auto'
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
  },
  details: {
    fontWeight: '300',
    marginBottom: '10px'
  },
  title: {
    margin: '10px 0'
  },
  label: {
    fontSize: '1.2rem',
    margin: '10px 0'
  },
  ratings: {
    display: 'flex',
    height: '30px'
  },
  icon: {
    height: '100%',
    width: 'auto',
    marginRight: '0'
  },
  ratingText: {
    margin: '0 8px',
    fontWeight: '400'
  }
});
