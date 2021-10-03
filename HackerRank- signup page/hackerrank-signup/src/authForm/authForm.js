import React, { useState } from 'react';
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
        </div>
      </div>
    );
}

export default AuthForm;