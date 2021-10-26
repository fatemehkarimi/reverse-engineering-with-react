import React, { useState } from 'react';
import SearchOption from './searchOption/searchOption.js';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { ReactComponent as MicrophoneIcon } from '../icons/microphone.svg';
import "./searchBox.css";

function SearchHistory() {
    return (<div>
        <ul className="search-history-container">
            <SearchOption title="salam" />
            <SearchOption title="Iran university of science and technology" />
            <SearchOption title="Isfahan university of technology" />
            <SearchOption title="golestan" />
        </ul>
    </div>);   
}

function SearchBox(props) {
    const [displaySearchHistory, setDisplaySearchHistory] = useState(false);

    function handleInputClick() {
        setDisplaySearchHistory(true);
    }

    return(
    <div className={ `search-box ${displaySearchHistory ? "search-box-expanded" : ""}` }>
      <div className="search-input-container">
        <SearchIcon className="search-box-icon" />
        <input name="q" onClick={ handleInputClick }
            onBlur={ () => setDisplaySearchHistory(false) } />
        <MicrophoneIcon className="search-box-icon" />
      </div>
        { displaySearchHistory && <SearchHistory /> }
    </div>);
}

export default SearchBox;