import React from 'react';
import MovieItem from './MovieItem'

function MovieList(props) {

    const movies = props.movies
    const query = props.query

    const renderQueryResponse = () => {
        return query === "" ? null :
        (movies === undefined ? <h5>No results...or too many results.</h5> : <h5>Results for {query}...</h5>)
    }

    const renderMovies = () => {
        return query !== "" && movies !== undefined ? 
        movies.map((movie, index) => { return <MovieItem key={index} movie={movie} /> }) : null
    }

    return(
        <section className='results'>
        {renderQueryResponse()}
        <div class='movies-container'>
            {renderMovies()}
        </div>
        </section>
    )
}

export default MovieList;