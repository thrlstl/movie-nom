import React, { useState } from 'react';
import noPosterAvailable from '../../src/assets/images/no-poster-available.png'
import nominationImage from '../../src//assets/images/nomination-1.png'

function MovieItem(props) {

    const title = props.movie.Title
    const year = props.movie.Year
    const poster = props.movie.Poster
    const [clicked, setClicked] = useState(0)

    const renderPoster = () => {
        return poster === 'N/A' ? noPosterAvailable : poster
    }

    const renderNominate = (image) => {
        image.src = nominationImage
    }

    const reRenderPoster = (image) => {
        return poster === 'N/A' ? image.src = noPosterAvailable : image.src = poster
    }

    const handleClicked = event => {
        props.handleNomination(event)
        setClicked(1)
    }

    return(
        <>
            <div 
            onClick={() => handleClicked()} 
            className='movie-item'
            onAnimationEnd={() => setClicked(0)}
            clicked={clicked}>
                <img 
                className='movie-poster' 
                src={renderPoster()}
                onMouseOver={(e) => renderNominate(e.target)}
                onMouseOut={(e) => reRenderPoster(e.target)}
                alt="Movie Poster" />
                    <text className='movie-info'>{title} ({year})</text>
            </div>
        </>
    )
}

export default MovieItem;