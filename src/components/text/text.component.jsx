import React from 'react';

import Typography from '@material-ui/core/Typography';

import { useStyles } from './text.styles';

const Text = ({ title, content, lg }) => {
  const { large, details, text } = useStyles();
  return (
    <div className={lg ? large : text}>
      <Typography>{title}</Typography>
      <div className={details}>{content}</div>
    </div>
  );
};

export default Text;
