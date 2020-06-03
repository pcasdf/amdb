import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import { useStyles } from './header.styles';
import SearchBar from '../search/search.component';
import SideDrawer from '../drawer/drawer.component';
import ThemeContext from '../../contexts/theme/theme.context';

const Header = ({ setTheme }) => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState({
    left: false
  });
  const [state, setState] = useState({
    checked: true
  });

  const handleChange = event => {
    setState({ checked: event.target.checked });
    if (theme.bg === 'white') {
      setTheme({
        bg: '#202020',
        font: 'white'
      });
    } else {
      setTheme({
        bg: 'white',
        font: 'black'
      });
    }
  };

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setToggle({ left: open });
  };

  const GraySwitch = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500]
      },
      '&$checked + $track': {
        backgroundColor: grey[500]
      }
    },
    checked: {},
    track: {}
  })(Switch);

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
          <div
            style={{
              position: 'absolute',
              right: '2%'
            }}
          >
            <GraySwitch
              checked={state.checked}
              onChange={handleChange}
              name='checkedA'
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
