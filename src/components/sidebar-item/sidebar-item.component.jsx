import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useStyles } from './sidebar-item.styles';
import { SidebarContext } from '../../contexts/sidebar/sidebar.context';

const SidebarItem = ({ title, url, id }) => {
  const { active, updateActive } = useContext(SidebarContext);
  const { item } = useStyles();
  const { push } = useHistory();
  const { pathname } = useLocation();
  let style;
  if (active === id) {
    style = {
      backgroundColor: '#248'
    };
  }
  const handleClick = () => {
    updateActive(id);
    push(url);
  };

  useEffect(() => {
    if (pathname === '/search' || pathname === '/') {
      updateActive(null);
    }
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <div style={style} className={item} onClick={handleClick}>
      {title.toUpperCase()}
    </div>
  );
};

export default SidebarItem;
