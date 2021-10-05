import React from 'react';
import IconInput from './iconInput/iconInput';
import AuthForm from './authForm/authForm';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MIN,
  VALIDATOR_MAX,
  VALIDATOR_EMAIL
} from './validators';
import './app.css';

function App() {
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
        <AuthForm>
          <IconInput icon="./user.svg" hint="First & Last name"
            validators={ [VALIDATOR_REQUIRE(), VALIDATOR_MIN(5), VALIDATOR_MAX(40) ] } ></IconInput>
          <IconInput icon="./email.svg" hint="Email"
            validators={ [VALIDATOR_EMAIL()] } ></IconInput>
          <IconInput icon="./lock.svg" type="password" hint="Your password"
            validators={ [VALIDATOR_MIN(6), VALIDATOR_MAX(20)] } ></IconInput>
        </AuthForm>
      </div>
    </div>
  );
}

export default App;
