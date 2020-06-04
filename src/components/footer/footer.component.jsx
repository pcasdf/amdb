import React from 'react';

import { useStyles } from './footer.styles';

const Footer = () => {
  const { footer, text } = useStyles();
  return (
    <div className={footer}>
      <div className={text}>Powered by OMDB API and The Movie DB API</div>
    </div>
  );
};

export default Footer;
