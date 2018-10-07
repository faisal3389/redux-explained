import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxDemo from './reduxDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ReduxDemo />
      </div>
    );
  }
}

export default App;
