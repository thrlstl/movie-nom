import React from 'react';
import nextPage from '../../src/assets/images/next-page.png';
import previousPage from '../../src/assets/images/previous-page.png'

function SearchBar(props) {

    const handleChange = query => {
        props.setQuery(query)
    }

    const handlePagination = type => {
        props.handlePagination(type)
    }

    const renderSearchBar = () => {
        return(
            <input placeholder='Search for a movie...' className='search-bar' onChange={(e) => handleChange(e.target.value)}></input>
        );
    }

    return (
        <>
        {renderSearchBar()}
        <img onClick={() => handlePagination('decrement')} className='previous-page' src={previousPage} alt="previous-page"></img>
        <img onClick={() => handlePagination('increment')} className='next-page' src={nextPage} alt="next-page"></img>
        </>
    )
}

export default SearchBar;