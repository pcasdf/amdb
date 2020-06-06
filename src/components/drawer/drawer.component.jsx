import React from 'react';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

import { useStyles } from './drawer.styles';
import ListEntry from '../list-entry/list-entry.component';

const SideDrawer = ({ toggleDrawer }) => {
  const { list, logo } = useStyles();
  return (
    <div
      className={list}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <img
            width='100%'
            height='auto'
            className={logo}
            src={require('../../assets/logo-grey.png')}
            alt='logo'
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListEntry title='Trending Movies' url='/trending/movie/week' />
        <ListEntry title='Trending TV Series' url='/trending/tv/week' />
      </List>
      <Divider />
      <List>
        <ListEntry title='Action' url='/genre/action/28' />
        <ListEntry title='Adventure' url='/genre/adventure/12' />
        <ListEntry title='Animation' url='/genre/animation/16' />
        <ListEntry title='Comedy' url='/genre/comedy/35' />
        <ListEntry title='Documentary' url='/genre/documentary/99' />
        <ListEntry title='Drama' url='/genre/drama/18' />
        <ListEntry title='Family' url='/genre/family/10751' />
        <ListEntry title='Fantasy' url='/genre/fantasy/14' />
        <ListEntry title='Horror' url='/genre/horror/27' />
        <ListEntry title='Mystery' url='/genre/mystery/9648' />
        <ListEntry title='Romance' url='/genre/romance/10749' />
        <ListEntry title='Science Fiction' url='/genre/scifi/878' />
        <ListEntry title='Thriller' url='/genre/thriller/53' />
      </List>
      <Divider />
      <List>
        <ListItem
          button
          onClick={() => window.open('http://www.linkedin.com/in/pcho90')}
        >
          <LinkedInIcon style={{ marginRight: '8px' }} />
          <ListItemText>@pcho90</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => window.open('http://www.github.com/pcho90')}
        >
          <GitHubIcon style={{ marginRight: '8px' }} />
          <ListItemText>github.com/pcho90</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default SideDrawer;
