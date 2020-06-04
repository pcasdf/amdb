import React, { useState } from 'react';

import { MenuItem, FormControl, Select } from '@material-ui/core';

import { useStyles } from './dropdown.styles';

const Dropdown = ({ options, defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = e => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <Select label='Age' onChange={handleChange} value={value}>
        {options.map(each => (
          <MenuItem key={each} value={each}>
            {each}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
