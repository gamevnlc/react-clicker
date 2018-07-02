import React from 'react'
import logo from '../logo.svg';

const Header = (props) => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{props.title}</h1>
            <small className="App-info"> A basic React app that allows one to increase, decrease, or reset a counter</small>
        </header>
    </div>
)

export default Header;