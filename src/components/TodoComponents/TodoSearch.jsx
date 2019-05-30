import React from 'react';

const TodoSearch = ({query, handleSearch}) => {
    return <div className="search-container">
        <input type="text" id="search-input" value={query} onChange={() => handleSearch()}/>
        <button id="search-" onClick={() => handleSearch()}>Search</button>
    </div>;
}