import React from 'react';
import "./App.css";
import { ReactComponent as MenuIcon } from "./icons/menu.svg";
import SearchBox from './searchbox/searchBox';

function App() {
  return (
    <div className="flex-horizontal">
      <div className="top-menu">
        <a className="link-primary" href="#">Gmail</a>
        <a className="link-primary" href="#">Images</a>
        <div className="svg-icon-wrapper">
          <MenuIcon/>
        </div>
        <button className="btn btn-primary">Sign in</button>
      </div>
      <div className="flex-row img-container">
        <div className="image-wrapper">
          <img src="./google-big.png" className="image-container" alt="google logo"></img>
        </div>
      </div>
      <div className="search-box-wrapper"><SearchBox /></div>
      <div>About</div>
    </div>
  );
}

export default App;
