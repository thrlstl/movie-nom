import React from 'react';
import nextPage from '../../src/assets/images/next-page.png';
import previousPage from '../../src/assets/images/previous-page.png'

function SearchBar(props) {

    const placeholder = 'Search by film title...'

    const handleChange = query => {
        props.setQuery(query)
    }

    const handlePagination = type => {
        props.handlePagination(type)
    }

    const renderSearchBar = () => {
        return(
            <input 
            placeholder={placeholder} 
            className='search-bar' 
            onChange={(e) => handleChange(e.target.value)} />
        );
    }

    return (
        <>
        {renderSearchBar()}
        <img onClick={() => handlePagination('decrement')} className='previous-page' src={previousPage} alt="previous-page" />
        <img onClick={() => handlePagination('increment')} className='next-page' src={nextPage} alt="next-page" />
        </>
    )
}

export default SearchBar;