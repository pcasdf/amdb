import React from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './sidebar-item.styles';

const SidebarItem = ({ title, url }) => {
  const { item, link } = useStyles();
  return (
    <div className={item}>
      <Link to={url} className={link}>
        {title.toUpperCase()}
      </Link>
    </div>
  );
};

export default SidebarItem;
