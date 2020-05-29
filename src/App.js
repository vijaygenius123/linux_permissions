import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Permission from './components/Permission'
function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12} md={12} justify="center" >
          <Typography variant="h1">
            Linux Permissions
            </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4} justify="center" >
          <Typography variant="h4">
            Self/Owner
          </Typography>
          <Permission />
        </Grid>
        <Grid item xs={12} md={4} justify="center" >
          <Typography variant="h4">
            Group
          </Typography>
          <Permission />
        </Grid>
        <Grid item xs={12} md={4} justify="center" >
          <Typography variant="h4">
            Others
          </Typography>
          <Permission />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">
            Command To Run
          </Typography>
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
