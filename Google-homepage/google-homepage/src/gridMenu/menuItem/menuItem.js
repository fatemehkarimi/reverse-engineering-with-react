import React from 'react';
import "./menuItem.css";

function MenuItem(props) {
    return (<div className="grid-menu-item">
      <a href={ props.link ? props.link : "#" }>
        <img src={ props.src } alt={ props.name } />
        <span>{ props.name }</span>
      </a>
    </div>)
}

export default MenuItem;