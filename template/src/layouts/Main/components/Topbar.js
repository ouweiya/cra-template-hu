import React, { useState, useEffect, memo } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Topbar = props => {
  return (
    <>
      <AppBar color='secondary'>
        <Toolbar>
          <Typography variant='h3' component='h2'>
            Heading
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
export default memo(Topbar);
