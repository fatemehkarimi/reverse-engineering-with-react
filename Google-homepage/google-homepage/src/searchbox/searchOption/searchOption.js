import React from 'react';
import ClockIcon from "../../icons/clock.png";
import "./searchOption.css";

function SearchOption(props) {
    return (<li className="search-option">
        <div className="search-option-container">
          <img src={ ClockIcon } />
          <a href={ props.link ? props.link : "#" }>{ props.title }</a>
        </div>
    </li>);
}

export default SearchOption;