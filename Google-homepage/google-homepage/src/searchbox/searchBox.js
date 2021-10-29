import React, { useState } from 'react';
import SearchOption from './searchOption/searchOption.js';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { ReactComponent as MicrophoneIcon } from '../icons/microphone.svg';
import "./searchBox.css";

function SearchHistory(props) {
    return (<div>
        <ul className="search-history-container">
            { props.items.map((item, i) => <SearchOption key={ i } title={ item } />) }
        </ul>
    </div>);   
}

function SearchBox(props) {
    const [displaySearchHistory, setDisplaySearchHistory] = useState(false);

    function handleInputClick() {
        setDisplaySearchHistory(true);
    }

    return(
    <div className={ `search-box ${displaySearchHistory && props.searchHistory.length > 0 ? "search-box-expanded" : ""}` }>
      <div className="search-input-container">
        <SearchIcon className="search-box-icon" />
        <input name="q" autoComplete="off" onClick={ handleInputClick }
            onBlur={ () => setDisplaySearchHistory(false) } />
        <MicrophoneIcon className="search-box-icon" />
      </div>
        { displaySearchHistory
        && props.searchHistory.length > 0
        && <SearchHistory items={ props.searchHistory } /> }
    </div>);
}

export default SearchBox;