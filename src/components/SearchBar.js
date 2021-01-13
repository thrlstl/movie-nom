import React, { useState } from 'react';

function SearchBar(props) {

    const handleChange = query => {
        props.setQuery(query)
    }

    const handlePagination = type => {
        props.handlePagination(type)
    }

    // const handleClick = type => {
    //     type === 'increment' ? props.setPageNumber(prevPageNumber => prevPageNumber + 1) : 
    //     props.setPageNumber(prevPageNumber => prevPageNumber - 1)
    // }

    const renderSearchBar = () => {
        return(
        <input onChange={(e) => handleChange(e.target.value)}></input>
        );
    }

    return (
        <>
        {renderSearchBar()}
        <br></br>
        <button onClick={() => handlePagination('decrement')}>Previous Page</button>
        <button onClick={() => handlePagination('increment')}>Next Page</button>
        </>
    )
}

export default SearchBar;