import React from 'react';

import Typography from '@material-ui/core/Typography';

import { useStyles } from './text.styles';

const Text = ({ title, content }) => {
  const { label, details } = useStyles();
  return (
    <div className='text'>
      <Typography className={label}>{title}</Typography>
      <div className={details}>{content}</div>
    </div>
  );
};

export default Text;
