import React from 'react';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { useStyles } from './drawer.styles';

const SideDrawer = ({ toggleDrawer }) => {
  const { list, icon } = useStyles();
  return (
    <div
      className={list}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
