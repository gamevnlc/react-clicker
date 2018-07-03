import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header className="App-header">
        <img src={props.logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{props.title}</h1>
        <small className="App-info text-white">{props.info}</small>
    </header>
)

Header.defaultProps = {
    title: 'Title',
    info: 'Info'
}

Header.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string
}

export default Header;