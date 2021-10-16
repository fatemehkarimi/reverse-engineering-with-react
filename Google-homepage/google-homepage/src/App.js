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
          <img src="./google-big.png" className="image-container" alt="google logo"/>
        </div>
      </div>
      <form class="search-form">
        <div className="search-box-wrapper">
            <SearchBox />
            <div className="submit-button-form">
              <button className="btn btn-small btn-secondary">Google Search</button>
              <button className="btn btn-small btn-secondary">I'm feeling lucky</button>
            </div>
        </div>
      </form>
      <div>About</div>
    </div>
  );
}

export default App;
