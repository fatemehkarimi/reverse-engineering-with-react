import React, { isValidElement, useState } from 'react';
import SocialButton from '../components/button/socialbutton';
import { INPUT_STATUS } from '../iconInput/iconInput';
import '../components/button/button.css';
import './authForm.css';

export const AUTHFORM_MODE = {
  LOGIN: 'login',
  SIGNUP: 'signup'
};

function AuthForm(props) {
  const [isSignupActiveTab, setSignupActiveTab] = useState(true);
  const [formStatus, setFormStatus] = useState({});
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  const notifyTabChanged = props.handleTabChanged;


  function resetFormValidty() {
    setFormStatus({});
    setDisableSubmitButton(false);
  }

  function changeTab(e, isActive) {
    e.preventDefault();
    setSignupActiveTab(isActive);
    resetFormValidty();
    
    if(isActive)
      notifyTabChanged(AUTHFORM_MODE.SIGNUP);
    else
      notifyTabChanged(AUTHFORM_MODE.LOGIN);
  }

  function handleInputState(inputName, state) {
    var newFormState = {...formStatus};
    newFormState[inputName] = state;
    setFormStatus(newFormState);

    if(state == INPUT_STATUS.INVALID)
      setDisableSubmitButton(true);
    else{
      var valid = true;
      for(const stateInput in newFormState)
        valid = valid && (newFormState[stateInput] == INPUT_STATUS.VALID ? true : false);
      
      if(!valid)
        setDisableSubmitButton(true);
      else
        setDisableSubmitButton(false);
    }
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
            { React.Children.map(
                props.children,
                child => {
                  if(isValidElement(child))
                    return React.cloneElement(child, {notifyStateChanged: handleInputState});
                }) }
            <div className="auth-btn-container">
              <button disabled={ disableSubmitButton } className="ui-btn ui-btn-large auth-btn">
                {isSignupActiveTab ? "Create An Account" : "Log In"}
              </button>
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