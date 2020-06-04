import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  content: {
    margin: '0 auto',
    display: 'flex',
    padding: '30px 0',
    borderBottom: '1px solid #112244',
    background: '#546c9e',
    color: 'white',
    width: '100%'
  },
  bgImage: {
    position: 'absolute',
    left: 0,
    top: '65px',
    width: '100%',
    height: '76vh',
    opacity: 0.1
  },
  poster: {
    margin: 'auto 0'
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
    margin: '10px 0',
    fontWeight: '600'
  },
  details: {
    fontWeight: '300',
    marginBottom: '15px'
  },
  rating: {
    border: '1px solid white',
    borderRadius: '2px',
    padding: '2px 7px',
    marginRight: '10px'
  }
});
