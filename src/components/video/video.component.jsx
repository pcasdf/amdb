import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Video = ({ title }) => {
  const [data, setData] = useState();

  const fetchData = async term => {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            q: term,
            part: 'snippet',
            type: 'video',
            maxResults: 10,
            key: 'AIzaSyBW_JGJwarlX1fxqH3GW2EhRuPTiyoFgvU'
          }
        }
      );
      setData(response.data.items);
      console.log(response.data.items);
    } catch (err) {
      console.log('Something went wrong.');
    }
  };

  useEffect(() => {
    fetchData(title);
  });

  return (
    <div>
      {/* {data && (
        <iframe
          class='video-player'
          src={`https://www.youtube.com/embed/${data[0].id.videoId}`}
        />
      )} */}
    </div>
  );
};

export default Video;
