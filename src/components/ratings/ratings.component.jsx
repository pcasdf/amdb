import React from 'react';

import { useStyles } from './ratings.styles';

const Ratings = ({ Ratings }) => {
  const { ratings, icon, ratingText } = useStyles();
  return (
    <div className={ratings}>
      <img className={icon} alt='iMDB' src={require('../../assets/imdb.png')} />
      <span className={ratingText}>{Ratings[0] && Ratings[0].Value}</span>
      <img
        className={icon}
        alt='Rotten Tomatoes'
        src={require('../../assets/tomato.ico')}
      />
      <span className={ratingText}>{Ratings[1] && Ratings[1].Value}</span>
      <img
        className={icon}
        alt='Metacritic'
        src={require('../../assets/metacritic.png')}
      />
      <span className={ratingText}>{Ratings[2] && Ratings[2].Value}</span>
    </div>
  );
};

export default Ratings;
