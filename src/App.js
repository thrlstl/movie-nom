import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Header from './components/Header'
// import logo from '../src/assets/images/logo.png'
// import header from '../src/assets/images/header.png'

function App() {

  const [query, setQuery] = useState('')
  const [movies, loadMovies] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    fetchData()
  }, [query, pageNumber])

  const fetchData = () => {
    const apiKey = 'ca733f6a'
    const type = 'movie'
    const URL = `https://www.omdbapi.com/?s=${query}&type=${type}&apikey=${apiKey}&page=${pageNumber}`
    fetch(URL)
        .then(resp => resp.json())
        .then(movies => {
            loadMovies(movies.Search)
        });
    };

    const handlePagination = type => {
        type === 'increment' ? setPageNumber(prevPageNumber => prevPageNumber + 1) : 
        setPageNumber(prevPageNumber => prevPageNumber - 1)
    }

  return (
    <div className='App'>
      <Header />
      <SearchBar
        setQuery={setQuery} 
        loadMovies={loadMovies}
        handlePagination={handlePagination} />
      <MovieList 
        movies={movies} 
        query={query} />
    </div>
  );
}

export default App;
