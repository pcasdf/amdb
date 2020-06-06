import React from 'react';
import { useHistory } from 'react-router-dom';

import { useStyles } from './sidebar-item.styles';

const SidebarItem = ({ title, url }) => {
  const { item } = useStyles();
  const { push } = useHistory();
  return (
    <div className={item} onClick={() => push(url)}>
      {title.toUpperCase()}
    </div>
  );
};

export default SidebarItem;
