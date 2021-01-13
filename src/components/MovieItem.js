import React from 'react';

function MovieItem(props) {

    const title = props.movie.Title
    const year = props.movie.Year
    const poster = props.movie.Poster

    return(
        <>
        <h5>{title} ({year})</h5>
        <button>Nominate</button>
        <img src={poster} alt="Movie Poster" />
        </>
    )
}

export default MovieItem;