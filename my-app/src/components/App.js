import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header'
import logo from '../logo.svg';

class App extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Welcome to React. Clicker App',
            logo: logo,
            info: ' A basic React app that allows one to increase, decrease, or reset a counter'
        }
    }
    
    render() {
        return (
            <div>
                <Header title={this.state.title} logo={this.state.logo} info={this.state.info}/>
            </div>
        );
    }
}

export default App;