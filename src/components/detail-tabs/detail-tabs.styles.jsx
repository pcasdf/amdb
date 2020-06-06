import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '0'
  },
  padding: {
    padding: theme.spacing(3)
  },
  carousel: {
    display: 'flex',
    justifyContent: 'center'
  },
  tabs: {
    '@media (max-width: 800px)': {
      width: '90vw',
      margin: '0 auto'
    }
  }
}));
