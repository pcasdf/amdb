import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import { useStyles } from './header.styles';
import SearchBar from '../search/search.component';
import SideDrawer from '../drawer/drawer.component';

const Header = () => {
  const [toggle, setToggle] = useState({
    left: false
  });

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setToggle({ left: open });
  };

  const { root, appBar, toolBar, menuButton, image, searchBar } = useStyles();

  return (
    <div className={root}>
      <AppBar position='static' className={appBar}>
        <Toolbar className={toolBar}>
          <MenuIcon
            edge='start'
            className={menuButton}
            color='inherit'
            aria-label='menu'
            onClick={toggleDrawer(true)}
          />
          <Drawer
            anchor='left'
            open={toggle.left}
            onClose={toggleDrawer(false)}
          >
            <SideDrawer toggleDrawer={toggleDrawer} />
          </Drawer>
          <Link to='/'>
            <img
              alt='aMDB'
              src={require('../../assets/logo.png')}
              className={image}
            />
          </Link>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <SearchBar className={searchBar} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
