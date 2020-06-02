import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  ratings: {
    display: 'flex',
    height: '30px',
    marginBottom: '10px'
  },
  icon: {
    height: '100%',
    width: 'auto',
    marginRight: '0'
  },
  ratingText: {
    margin: 'auto 24px',
    marginLeft: '8px',
    fontWeight: '400'
  }
});
