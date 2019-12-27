import React, { useState, useEffect, memo } from 'react';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';

const Topbar = props => {
  return (
    <Appbar color='primary'>
      <Toolbar>
        <Typography variant='h3' component='h2'>
          Heading
        </Typography>
      </Toolbar>
    </Appbar>
  );
};

export default Topbar;
