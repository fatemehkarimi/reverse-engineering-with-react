import React from 'react';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { ReactComponent as MicrophoneIcon } from '../icons/microphone.svg';
import "./searchBox.css";

function SearchBox(props) {
    return(
    <div className="search-box">
        <SearchIcon className="search-box-icon" />
        <input name="q"/>
        <MicrophoneIcon className="search-box-icon" />
    </div>);
}

export default SearchBox;