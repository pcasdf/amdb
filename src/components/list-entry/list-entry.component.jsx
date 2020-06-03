import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ListEntry = ({ title, url }) => (
  <ListItem button>
    <ListItemText>
      <Link to={url}>{title}</Link>
    </ListItemText>
  </ListItem>
);

export default ListEntry;
