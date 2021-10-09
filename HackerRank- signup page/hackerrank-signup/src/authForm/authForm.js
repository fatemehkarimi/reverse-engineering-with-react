import React, { useState } from 'react';
import SocialButton from '../components/button/socialbutton';
import '../components/button/button.css';
import './authForm.css';

export const AUTHFORM_MODE = {
  LOGIN: 'login',
  SIGNUP: 'signup'
};

function AuthForm(props) {
  const [isSignupActiveTab, setSignupActiveTab] = useState(true);
  const notifyTabChanged = props.handleTabChanged;

  function changeTab(e, isActive) {
    e.preventDefault();
    setSignupActiveTab(isActive);
    if(isActive)
      notifyTabChanged(AUTHFORM_MODE.SIGNUP);
    else
      notifyTabChanged(AUTHFORM_MODE.LOGIN);
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
          <form onSubmit={ e => props.onFormSubmit(e) } >
            { props.children }
            <div className="auth-btn-container">
              <button className="ui-btn ui-btn-large auth-btn">Create An Account</button>
            </div>
          </form>
          <div className="seperator-line">
            <span className="seperator-label">or connect with</span>
          </div>
          <div className="social-container">
            <SocialButton logo="./facebook.svg" name="facebook" />
            <SocialButton logo="./google.svg" name="google" />
            <SocialButton logo="./linkedin.svg" name="linkedin" />
            <SocialButton logo="./github.svg" name="github" />
          </div>
        </div>
      </div>
    );
}

export default AuthForm;