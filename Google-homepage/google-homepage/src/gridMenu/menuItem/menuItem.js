import React from 'react';
import "./menuItem.css";

function MenuItem(props) {
    return (<div className="grid-menu-item">
        <img src={ props.src } alt={ props.name } />
    </div>)
}

export default MenuItem;