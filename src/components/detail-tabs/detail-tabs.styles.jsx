import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '0'
  },
  padding: {
    padding: theme.spacing(3)
  },
  image: {
    width: '100%',
    boxShadow: '2px 2px 5px gray'
  },
  carousel: {
    display: 'flex',
    justifyContent: 'center'
  },
  imageGrid: {
    width: '80vw',
    margin: '0 auto'
  }
}));
