import React from 'react';

const Video = ({ id }) => (
  <div style={{ textAlign: 'center' }}>
    {id && (
      <iframe
        style={{ width: '64vw', height: '36vw', border: 'none' }}
        title='Trailer'
        class='video-player'
        src={`https://www.youtube.com/embed/${id}`}
      />
    )}
  </div>
);

export default Video;
