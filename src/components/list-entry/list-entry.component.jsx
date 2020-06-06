import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemText } from '@material-ui/core';

const ListEntry = ({ title, url }) => (
  <ListItem button>
    <ListItemText style={{ fontFamily: 'Quicksand' }}>
      <Link to={url}>{title}</Link>
    </ListItemText>
  </ListItem>
);

export default ListEntry;
