import React, { useEffect, useState } from 'react';
import noPosterAvailable from '../../src/assets/images/no-poster-available.png'
import nominationImage from '../../src//assets/images/nomination-1.png'

function MovieItem(props) {

    const [nominated, setNominated] = useState(0)

    const movie = props.movie
    const title = props.movie.Title
    const year = props.movie.Year
    const poster = props.movie.Poster
    const nominationsCount = props.nominations.length

    useEffect(() => {
        isNominated()
    }, [props.nominations])

    const isNominated = () => {
        return props.nominations.includes(movie) ? setNominated(1) : null
    }

    const renderPoster = () => {
        return poster === 'N/A' ? noPosterAvailable : poster
    }

    const renderNominate = image => {
        return nominated === 0 && nominationsCount < 5 ? image.src = nominationImage : null
    }

    const reRenderPoster = image => {
        return poster === 'N/A' ? image.src = noPosterAvailable : image.src = poster
    }

    const handleClick = event => {
        return nominated === 0 && nominationsCount < 5 ? props.handleNomination(event) : null
    }

    return(
        <>
            <div 
            onClick={() => handleClick()} 
            className='movie-item'
            nominated={nominated}
            >
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