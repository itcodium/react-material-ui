import React, { Component } from 'react';
import './App.css';
import SvgIcons from './components/svg_Icons'
import SimpleSnackbar from './components/snackbars'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Main</p>
          <SvgIcons></SvgIcons>
          <SimpleSnackbar></SimpleSnackbar>
        </header>
      </div>
    );
  }
}

export default App;
