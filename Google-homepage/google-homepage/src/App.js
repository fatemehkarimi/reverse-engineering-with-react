import React, { useState } from 'react';
import { ReactComponent as MenuIcon } from "./icons/menu.svg";
import SearchBox from './searchbox/searchBox';
import GridMenu from './gridMenu/gridMenu';
import "./App.css";

function App() {
  const[searchHistoryItems, setSearchHistoryItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    var query = e.target.q.value;
    if(!query || query.trim().length == 0)
      return;
    
    var newSearchHistoryItems = [query, ...searchHistoryItems];
    if(newSearchHistoryItems.length > 8)
      newSearchHistoryItems.pop();

    setSearchHistoryItems(newSearchHistoryItems);
    e.target.reset();
  }

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
      <form class="search-form" onSubmit={ handleSubmit } >
        <div className="search-box-wrapper">
            <SearchBox searchHistory={ searchHistoryItems } />
            <div className="submit-button-form">
              <button type="submit" className="btn btn-small btn-secondary">Google Search</button>
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
