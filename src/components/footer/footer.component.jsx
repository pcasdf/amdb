import React from 'react';

import { useStyles } from './footer.styles';

const Footer = () => {
  const { footer, text, logos, logo } = useStyles();
  return (
    <div className={footer}>
      <div className={logos}>
        <img
          className={logo}
          alt='facebook'
          src={require('../../assets/facebook.svg')}
        />
        <img
          className={logo}
          alt='instagram'
          src={require('../../assets/instagram.svg')}
        />
        <img
          className={logo}
          alt='youtube'
          src={require('../../assets/youtube.svg')}
        />
        <img
          className={logo}
          alt='twitter'
          src={require('../../assets/twitter.svg')}
        />
        <img
          className={logo}
          alt='linkedin'
          src={require('../../assets/linkedin.svg')}
        />
      </div>
      <div className={text}>powered by omdb api and themoviedb api</div>
    </div>
  );
};

export default Footer;
