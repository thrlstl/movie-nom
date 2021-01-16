import React, { useEffect, useState } from 'react';
import logo from '../../src/assets/images/logo.png'
import header from '../../src/assets/images/header.png'
import nominationsButton from '../../src/assets/images/heart.png'

function Header(props) {

    const [notification, setNotification] = useState(0)

    useEffect(() => {
        return props.nominations.length > 0 ? setNotification(1) : null
    }, [props.nominations])

    return(
        <div className='header-container'>
            <img className='logo' src={logo} alt="Logo" />
            <img className='header' src={header} alt="Header" />
                <img 
                onClick={() => props.toggleNominations()}
                notification={notification}
                onAnimationEnd={() => setNotification(0)}
                className='nominations-button' 
                src={nominationsButton} 
                alt="Nominations Button" />
        </div>
    )
}

export default Header;