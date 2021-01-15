import React from 'react';
import MovieItem from './MovieItem'

function MovieList(props) {

    const movies = props.movies
    const query = props.query

    const renderQueryResponse = () => {
        return query === "" ? null :
        (movies === undefined ? <text className='query-response'>no results...or too many results.</text> : <text className='query-response'>results for {query}...</text>)
    }

    const renderMovies = () => {
        return query !== "" && movies !== undefined ? 
        movies.map((movie, index) => { return <MovieItem handleNomination={() => props.handleNomination(movie)} key={index} movie={movie} /> }) : null
    }

    return(
        <section className='results'>
            <div className='query-response-container'>
                {renderQueryResponse()}
            </div>
                <div class='movies-container'>
                    {renderMovies()}
                </div>
        </section>
    )
}

export default MovieList;