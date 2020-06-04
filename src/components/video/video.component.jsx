import React from 'react';

import { useStyles } from './video.styles';

const Video = ({ id }) => {
  const { vid } = useStyles();
  return (
    <div style={{ textAlign: 'center' }}>
      {id && (
        <iframe
          style={{ width: '64vw', height: '36vw', border: 'none' }}
          title='Trailer'
          className={vid}
          src={`https://www.youtube.com/embed/${id}`}
        />
      )}
    </div>
  );
};

export default Video;
