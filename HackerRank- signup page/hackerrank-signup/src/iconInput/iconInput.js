import React from 'react';
import './iconInput.css'

function IconInput(props) {

    return (
        <div className="icon-input">
            <img src={ props.icon } alt="icon" />
            <span><input placeholder={ props.hint }></input></span>
        </div>
    );
}

export default IconInput;