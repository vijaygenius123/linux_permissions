import React, { useState } from 'react';

// MaterialUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//CSS
import './App.css';

//Custom Components
import Header from './components/Header'
import PermissionsList from './components/PermissionsList'
import Command from './components/Command'

function App() {
  return (
    <div className="App">
      <Header />
      <PermissionsList />
      <Command />
    </div >
  );
}

export default App;
