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
      command: null,
      S: [false, false, false],
      G: [false, false, false],
      O: [false, false, false]
    }
  }

  calculateValue = (arr) => {
    return arr.reduce((prev, current, index) => {
      return prev + current * 2 ** index
    }, 0)

  }
  calculateCommand = (S, G, O) => {
    console.log('Calculating Command')
    console.log(S, G, O)
    console.log(this.calculateValue(S))
    console.log(this.calculateValue(G))
    console.log(this.calculateValue(O))
    this.setState({ command: `${this.calculateValue(S)}${this.calculateValue(G)}${this.calculateValue(O)}` })
  }

  updateValues = (section, values) => {
    const { S, G, O } = this.state;
    if (section === 'S') {
      this.setState(() => {
        this.calculateCommand(values, G, O)
        return { S: values }
      })
    } else if (section === 'G') {
      this.setState(() => {
        this.calculateCommand(S, values, O)
        return { G: values }
      })
    } else if (section === 'O') {
      this.setState(() => {
        this.calculateCommand(S, G, values)
        return { O: values }
      })
    }

  }



  render() {
    const { command, values } = this.state;
    return (
      <div className="App" >
        <Header />
        <PermissionsList updateValues={this.updateValues} />
        <Command command={command} />
      </div >
    )
  }
}

export default App;
