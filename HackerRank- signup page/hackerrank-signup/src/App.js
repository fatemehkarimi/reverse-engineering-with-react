import React from 'react';
import IconInput from './iconInput/iconInput';
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
        <div>
          <IconInput icon="./user.svg" hint="First & Last name" ></IconInput>
          <IconInput icon="./email.svg" hint="Email" ></IconInput>
          <IconInput icon="./lock.svg" hint="Your password" ></IconInput>
        </div>
      </div>
    </div>
  );
}

export default App;
