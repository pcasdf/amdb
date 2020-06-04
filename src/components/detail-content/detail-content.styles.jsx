import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  content: {
    margin: '0 auto',
    display: 'flex',
    paddingBottom: '30px',
    borderBottom: '1px solid #112244'
  },
  grid: {
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
