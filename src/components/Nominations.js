import React from 'react';
import NominationItem from './NominationItem'
import NominationsIcon from '../../src/assets/images/heart-box-shadow.png'

function Nominations(props) {

    const renderNominations = () => {
        return props.nominations.map((movie, index) => { return <NominationItem 
                                                                handleRemove={() => props.handleRemove(movie)} 
                                                                movie={movie} 
                                                                key={index} /> })
    }

    return(
        <div className='nominations-window'>
        <img className='nominations-icon' src={NominationsIcon} alt="My Nominations" />
        <div className='nominations-container'>
            {renderNominations()}
        </div>
        </div>
    )
}

export default Nominations;