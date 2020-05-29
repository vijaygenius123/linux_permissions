import React, { Component } from 'react';

// MaterialUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//CSS
import './App.css';

//Custom Components
import Header from './components/Header'
import PermissionsList from './components/PermissionsList'
import Command from './components/Command'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      command: null
    }
  }

  calculateCommand = (section, value) => {
    console.log(section, value);
  }

  render() {
    const { command } = this.state;
    return (
      <div className="App" >
        <Header />
        <PermissionsList calculateCommand={this.calculateCommand} />
        <Command command={command} />
      </div >
    )
  }
}

export default App;
