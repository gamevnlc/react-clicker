import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import logo from '../logo.svg';
import Clicker from './Clicker';

class App extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Clicker App',
            logo: logo,
            info: ' A basic React app that allows one to increase, decrease, or reset a counter'
        };
    }
    
    render() {
        return (
            <div className="App">
                <Header title={this.state.title} logo={this.state.logo} info={this.state.info}/>
                <Clicker />
            </div>
        );
    }
}

export default App;