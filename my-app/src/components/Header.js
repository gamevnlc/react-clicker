import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <div className="App">
        <header className="App-header">
            <img src={props.logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{props.title}</h1>
            <small className="App-info">{props.info}</small>
        </header>
    </div>
)

Header.defaultProps = {
    title: 'Title',
    info: 'Info'
}

Header.propTypes = {
    title: PropTypes.string,
    info: PropTypes.str
}

export default Header;