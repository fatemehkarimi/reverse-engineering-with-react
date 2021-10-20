import React from 'react';
import "./App.css";
import { ReactComponent as MenuIcon } from "./icons/menu.svg";
import SearchBox from './searchbox/searchBox';
import GridMenu from './gridMenu/gridMenu';

function App() {
  return (
    <div className="flex-horizontal">
      <div className="top-menu">
        <a className="link-primary" href="#">Gmail</a>
        <a className="link-primary" href="#">Images</a>
        <div className="svg-icon-wrapper">
          <GridMenu />
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
            <div className="language-div">Google offered in: <a href="#">فارسی</a></div>
        </div>
      </form>
      <div className="about-menu">
        <div className="sub-menu">
          <a className="link-secondary menu-item">About</a>
          <a className="link-secondary menu-item">Advertising</a>
          <a className="link-secondary menu-item">Business</a>
          <a className="link-secondary menu-item">How Search works</a>
        </div>
        <div className="sub-menu">
          <a className="link-secondary menu-item">Privacy</a>
          <a className="link-secondary menu-item">Terms</a>
          <a className="link-secondary menu-item">Settings</a>
        </div>
      </div>
    </div>
  );
}

export default App;
