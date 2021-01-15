import React from 'react';
import noPosterAvailable from '../../src/assets/images/no-poster-available.png'
import removeImage from '../../src/assets/images/remove.png'

function NominationItem(props) {

    const title = props.movie.Title
    const year = props.movie.Year
    const poster = props.movie.Poster

    const renderPoster = () => {
        return props.movie.Poster === 'N/A' ? noPosterAvailable : poster
    }

    const renderRemove = (image) => {
        image.src = removeImage
    }

    const reRenderPoster = (image) => {
        return props.movie.Poster === 'N/A' ? image.src = noPosterAvailable : image.src = poster
    }

    return(
        <>
            <div onClick={() => props.handleRemove()} className='nomination-item'>
                <img 
                className='movie-poster' 
                src={renderPoster()}
                onMouseOver={(e) => renderRemove(e.target)}
                onMouseOut={(e) => reRenderPoster(e.target)}
                alt="Movie Poster" />
                    <text className='movie-info'>{title} ({year})</text>
            </div>
        </>
    )
}

export default NominationItem;