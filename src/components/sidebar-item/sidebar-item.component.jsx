import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useStyles } from './sidebar-item.styles';
import { SidebarContext } from '../../contexts/sidebar/sidebar.context';

const SidebarItem = ({ title, url, id }) => {
  const { active, updateActive } = useContext(SidebarContext);
  const { item } = useStyles();
  const { push } = useHistory();
  let style;
  if (active === id) {
    style = {
      backgroundColor: '#248'
    };
  }
  const handleClick = () => {
    updateActive(id);
    push(url);
    console.log(id);
    console.log(active);
    console.log(style);
  };

  return (
    <div style={style} className={item} onClick={handleClick}>
      {title.toUpperCase()}
    </div>
  );
};

export default SidebarItem;
