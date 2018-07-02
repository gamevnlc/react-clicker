import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React. Clicker App</h1>
        </header>
        <p className="App-intro">
          A basic React app that allows one to increase, decrease, or reset a counter
        </p>
      </div>
    );
  }
}

export default App;