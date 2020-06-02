import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  content: {
    margin: '0 auto',
    display: 'flex'
  },
  grid: {
    paddingTop: '30px',
    marginLeft: 0
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
  },
  title: {
    margin: '10px 0'
  },
  details: {
    fontWeight: '300',
    marginBottom: '15px'
  }
});
