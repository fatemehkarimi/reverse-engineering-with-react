import React, { useState, useRef } from 'react';
import { validate, validte } from '../validators';
import './iconInput.css';

const INPUT_STATUS = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID'
};

function IconInput(props) {
    const divElem = useRef();
    const [activated, setActivated] = useState(false);
    const [inputState, setInputState] = useState(INPUT_STATUS.UNTOUCHED);
    const [error, setError] = useState("");

    const checkInputIsValid = (e) => {
      setError("");
      var valid = validate(e.target.value, props.validators);
      if(valid)
        setInputState(INPUT_STATUS.VALID);
      else
        setInputState(INPUT_STATUS.INVALID);
    }

    const checkInputChange = (e) => {
      if(inputState == INPUT_STATUS.UNTOUCHED)
        return;

      checkInputIsValid(e);
    }

    return (
      <div className={ `icon-input ${activated ? 
        (inputState == INPUT_STATUS.INVALID ? "icon-input-errored" : "icon-input-clicked") : "" }` }>
        <img src={ props.icon } alt="icon" />
        <input type={ props.type }
          onFocus={ () => setActivated(true) }
          onChange={ checkInputChange }
          onBlur={ checkInputIsValid }
          placeholder={ props.hint }></input>
      </div>
    );
}

export default IconInput;