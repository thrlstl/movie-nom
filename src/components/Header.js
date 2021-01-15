import React from 'react';
import logo from '../../src/assets/images/logo.png'
import header from '../../src/assets/images/header.png'

function Header() {

    return(
        <section>
            <img className='logo' src={logo} alt="Logo"></img>
            <img className='header' src={header} alt="Header"></img>
        </section>
    )
}

export default Header;