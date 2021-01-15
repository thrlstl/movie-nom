import React from 'react';
import NominationItem from './NominationItem'
// import logo from '../../src/assets/images/logo.png'

function Nominations(props) {

    const renderNominations = () => {
        return props.nominations.map((movie, index) => { return <NominationItem movie={movie} index={index} /> })
    }

    return(
        <div className='nominations-container'>
            {renderNominations()}
        </div>
    )
}

export default Nominations;