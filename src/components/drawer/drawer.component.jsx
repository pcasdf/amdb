import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './drawer.styles';

const SideDrawer = ({ toggleDrawer }) => {
  const { header, list, icon } = useStyles();
  return (
    <div
      className={list}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Typography className={header} variant='h3'>
            aMDB
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText>
            <Link to='/trending/movie/week'>Trending Movies</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link to='/trending/tv/week'>Trending TV Series</Link>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <img
              className={icon}
              alt='iMDB'
              src={require('../../assets/imdb.png')}
            />
          </ListItemIcon>
          <ListItemText>iMDB</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img
              className={icon}
              alt='Rotten Tomatoes'
              src={require('../../assets/tomato.ico')}
            />
          </ListItemIcon>
          <ListItemText>Rotten Tomatoes</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img
              className={icon}
              alt='Metacritic'
              src={require('../../assets/metacritic.png')}
            />
          </ListItemIcon>
          <ListItemText>Metacritic</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default SideDrawer;
