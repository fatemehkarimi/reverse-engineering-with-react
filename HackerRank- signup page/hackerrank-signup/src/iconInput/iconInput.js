import React from 'react';
import './iconInput.css'

function IconInput(props) {

    return (
        <div className="icon-input">
            <img src={ props.icon } alt="icon" />
            <input placeholder={ props.hint }></input>
        </div>
    );
}

export default IconInput;