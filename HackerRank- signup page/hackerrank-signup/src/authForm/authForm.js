import React, { useState } from 'react';
import SocialButton from '../components/button/socialbutton';
import '../components/button/button.css';
import './authForm.css';

function AuthForm(props) {
  const [isSignupActiveTab, setSignupActiveTab] = useState(true);

  function changeTab(e, isActive) {
    e.preventDefault();
    setSignupActiveTab(isActive);
  }

    return (
      <div className="auth-form">
        <div className="tab-header">
          <a className={`tab-button ${isSignupActiveTab ? 'tab-button-active' : ''}`}
             onClick={ (e) => changeTab(e, true) } href="#"
             style={ isSignupActiveTab ? { boxShadow: "5px 0px 5px -5px rgb(0 0 0 / 20%)", zIndex: 1 } : {} } >Sign up</a>
          <a className={`tab-button ${!isSignupActiveTab ? 'tab-button-active' : ''}`}
             onClick={ (e) => changeTab(e, false) } href="#"
             style={ !isSignupActiveTab ? { boxShadow: "-5px 0px 5px -5px rgb(0 0 0 / 20%)", zIndex: 1 } : {} } >Log in</a>
        </div>
        <div className="tab-list-content">
          { props.children }
          <div className="auth-btn-container">
            <button className="ui-btn ui-btn-large auth-btn">Create An Account</button>
          </div>
          <div className="seperator-line">
            <span className="seperator-label">or connect with</span>
          </div>
          <div className="social-container">
            <SocialButton logo="./facebook.svg" name="facebook" />
            <SocialButton logo="./google.svg" name="google" />
            <SocialButton logo="./linkedin.svg" name="linkedin" />
            <SocialButton logo="./github.svg" name="github" />
            {/* <img style={ {width: 100, height: 100} } src="./facebook.svg"></img> */}
            {/* <img style={ {width: 100, height: 100} } src="./google.svg"></img> */}
            {/* <img style={ {width: 100, height: 100} } src="./linkedin.svg"></img> */}
            {/* <img style={ {width: 100, height: 100} } src="./github.svg"></img> */}
          </div>
        </div>
      </div>
    );
}

export default AuthForm;