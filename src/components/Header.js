import React from 'react'

const Header = (props) => {
    let adminName = props.admin;
    return (
        <header className="header">
            <p>This is header section and {adminName} is logged in.</p>
        </header>
    )
}

export default Header
