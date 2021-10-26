import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { ReactComponent as MicrophoneIcon } from '../icons/microphone.svg';
import "./searchBox.css";

function SearchHistory() {
    return (<div className="search-history">
        <ul>
            <li>salam</li>
            <li>Iran university of science and technology</li>
            <li>Isfahan university of technology</li>
            <li>golestan</li>
        </ul>
    </div>);   
}

function SearchBox(props) {
    const [displaySearchHistory, setDisplaySearchHistory] = useState(false);

    function handleInputClick() {
        setDisplaySearchHistory(true);
    }

    return(
    <div className={ `${displaySearchHistory ? "search-box-expanded" : "search-box"}` }>
      <div className="search-input-container">
        <SearchIcon className="search-box-icon" />
        <input name="q" className="search-box-input" onClick={ handleInputClick }
            onBlur={ () => setDisplaySearchHistory(false) } />
        <MicrophoneIcon className="search-box-icon" />
      </div>
        { displaySearchHistory && <SearchHistory /> }
    </div>);
}

export default SearchBox;