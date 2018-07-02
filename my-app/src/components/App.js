import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header'

class App extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Welcome to React. Clicker App'
        }
    }
    
    render() {
        return (
            <div>
                <Header title={this.state.title}/>
            </div>
        );
    }
}

export default App;