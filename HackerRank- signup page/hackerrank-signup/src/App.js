import React from 'react';
import IconInput from './iconInput/iconInput';

function App() {
  return (
    <div>
      <IconInput icon="./user.svg" hint="First & Last name" ></IconInput>
      <IconInput icon="./email.svg" hint="Email" ></IconInput>
      <IconInput icon="./lock.svg" hint="Your password" ></IconInput>
    </div>
  );
}

export default App;
