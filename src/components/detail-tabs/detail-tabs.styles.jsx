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
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
  },
  carousel: {
    display: 'flex',
    justifyContent: 'center'
  }
}));
