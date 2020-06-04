import React from 'react';

const Video = ({ id }) => (
  <div style={{ textAlign: 'center' }}>
    {id && (
      <iframe
        style={{ width: '80%', height: '450px', border: 'none' }}
        title='Trailer'
        class='video-player'
        src={`https://www.youtube.com/embed/${id}`}
      />
    )}
  </div>
);

export default Video;
