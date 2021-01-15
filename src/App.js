import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Header from './components/Header'
import Nominations from './components/Nominations'

function App() {

  const [query, setQuery] = useState('')
  const [movies, loadMovies] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [nomToggle, setNomToggle] = useState(false)
  const [nominations, setNominations] = useState([])

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

    const toggleNominations = () => {
      setNomToggle(!nomToggle)
    }

    const handleNomination = movie => {
      setNominations(prevNominations => [...nominations, movie])
    }

    const handleRemove = movie => {
      setNominations(nominations.filter(nomination => nomination !== movie))
    }

  return (
    <div className='App'>

      <Header
      toggleNominations={toggleNominations}
      notifications={nominations.length}
      />
        
        <SearchBar
        setQuery={setQuery} 
        loadMovies={loadMovies}
        handlePagination={handlePagination} />

      { nomToggle && nominations.length ? 
      
        <Nominations
        handleRemove={handleRemove} 
        nominations={nominations} /> :
        
        <MovieList
        handleNomination={handleNomination} 
        movies={movies} 
        query={query} />  }

    </div>
  );
}

export default App;
