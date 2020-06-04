import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  item: {
    marginBottom: '2px',
    width: '70%',
    padding: '10px',
    fontSize: '.9rem',
    borderRadius: '5px',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: '#248',
      cursor: 'pointer'
    }
  },
  link: {
    color: '#aaa'
  }
});
