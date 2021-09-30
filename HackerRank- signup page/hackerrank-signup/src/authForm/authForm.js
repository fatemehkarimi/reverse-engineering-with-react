import React, { Children } from 'react';
import "./authForm.css"

function AuthForm(props) {
    return (
      <div className="auth-form">
        <div className="tab-header">
          <a className="tab-button" href="#">Sign up</a>
          <a className="tab-button" href="#">Log in</a>
        </div>
        <div className="tab-list-content">
          { props.children }
        </div>
      </div>
    );
}

export default AuthForm;