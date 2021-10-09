import React, { useState } from 'react';
import IconInput from './iconInput/iconInput';
import AuthForm, { AUTHFORM_MODE } from './authForm/authForm';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MIN,
  VALIDATOR_MAX,
  VALIDATOR_EMAIL
} from './validators';
import './app.css';

function App() {
  const [formMode, setFormMode] = useState(AUTHFORM_MODE.SIGNUP);
  
  function authFormTabChanged(mode) {
    setFormMode(mode);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    var data = new FormData(e.target);
    var valid = true;
    data.forEach((field) => {
      if(!field || field.length == 0)
        valid = false;
    });
  }

  return (
    <div className="auth-container">
      <div className="auth-content-wrap">
        <div className="auth-headline">
          <div className="logo-wraper">
            <img  src="./hr.svg"></img>
          </div>
          <h2>For Developers</h2>
          <p>Practice coding, prepare for interviews, and get hired.</p>
        </div>
        <AuthForm onFormSubmit={ handleFormSubmit } handleTabChanged={ authFormTabChanged } >
          { formMode == AUTHFORM_MODE.SIGNUP &&
            <IconInput icon="./user.svg"
              name="name"
              hint="First & Last name"
              validators={ [VALIDATOR_REQUIRE(), VALIDATOR_MIN(5), VALIDATOR_MAX(40) ] } />
          }
          { formMode == AUTHFORM_MODE.SIGNUP &&
            <IconInput icon="./email.svg"
              name="email"
              hint="Email"
              validators={ [VALIDATOR_EMAIL()] } />
          }
          { formMode == AUTHFORM_MODE.SIGNUP &&
            <IconInput icon="./lock.svg"
              name="password"
              type="password"
              hint="Your password"
              validators={ [VALIDATOR_MIN(6), VALIDATOR_MAX(20)] } />
          }
          { formMode == AUTHFORM_MODE.LOGIN &&
            <IconInput icon="./email.svg"
              name="email"
              hint="Your username or email"
              validators={ [] } />
          }
          { formMode == AUTHFORM_MODE.LOGIN &&
            <IconInput icon="./lock.svg"
              name="password"
              type="password"
              hint="Your password"
              validators={ [] } />
          }
        </AuthForm>
      </div>
    </div>
  );
}

export default App;
