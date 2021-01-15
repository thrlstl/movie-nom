import { render } from '@testing-library/react';
import React from 'react';
import noPosterAvailable from '../../src/assets/images/no-poster-available.png'
import nominationImage from '../../src//assets/images/nomination-1.png'

function MovieItem(props) {

    const title = props.movie.Title
    const year = props.movie.Year
    const poster = props.movie.Poster

    const renderPoster = () => {
        return props.movie.Poster === 'N/A' ? noPosterAvailable : poster
    }

    const renderNominate = (image) => {
        image.src = nominationImage
    }

    const reRenderPoster = (image) => {
        return props.movie.Poster === 'N/A' ? image.src = noPosterAvailable : image.src = poster
    }

    return(
        <>
        <div className='movie-item'>
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