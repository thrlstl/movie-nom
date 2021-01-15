import React, { useEffect } from 'react';
import logo from '../../src/assets/images/logo.png'
import header from '../../src/assets/images/header.png'
import nominationsButton from '../../src/assets/images/heart.png'

function Header(props) {

    const notifications = props.notifications

    return(
        <div className='header-container'>
            <img className='logo' src={logo} alt="Logo"></img>
            <img className='header' src={header} alt="Header"></img>
            <img onClick={() => props.toggleNominations()} className='nominations-button' src={nominationsButton} alt="Nominations Button"></img>
        </div>
    )
}

export default Header;