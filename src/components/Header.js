import React from 'react';
import logo from '../../src/assets/images/logo.png'
import header from '../../src/assets/images/header.png'
import nominationsButton from '../../src/assets/images/heart.png'

function Header() {

    return(
        <section>
            <img className='logo' src={logo} alt="Logo"></img>
            <img className='header' src={header} alt="Header"></img>
            <img className='nominations-button' src={nominationsButton} alt="Nominations Button"></img>
        </section>
    )
}

export default Header;