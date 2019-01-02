import React, { Component } from 'react';
import HeaderApp from './components/header';
import MainApp from './components/main';
class App extends Component {
  render () {
    return (
      <div className="ui stackable four column grid panel">
        <div className="row">
          <HeaderApp></HeaderApp>
          <MainApp></MainApp>
        </div>
      </div>
    );
  }
}
export default App;