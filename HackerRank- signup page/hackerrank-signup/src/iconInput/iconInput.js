import React, { useState, useRef } from 'react';
import { validate, validte } from '../validators';
import './iconInput.css';

export const INPUT_STATUS = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID'
};

function IconInput(props) {
    const divElem = useRef();
    const [activated, setActivated] = useState(false);
    const [inputState, setInputState] = useState(INPUT_STATUS.UNTOUCHED);
    const notifyStateChanged = props.notifyStateChanged;

    const validateInput = (e) => {
      var valid = validate(e.target.value, props.validators);
      return valid;
    }

    const handleFocusEvent = (e) => {
      setActivated(true);
      if(inputState != INPUT_STATUS.UNTOUCHED) {
        notifyStateChanged(props.name, INPUT_STATUS.VALID);
        setInputState(INPUT_STATUS.VALID);
      }
    }

    const handleBlurEvent = (e) => {
      var valid = validateInput(e);
      if(valid) {
        setInputState(INPUT_STATUS.VALID);
        notifyStateChanged(props.name, INPUT_STATUS.VALID);
        setActivated(false);
      }
      else {
        setInputState(INPUT_STATUS.INVALID);
        notifyStateChanged(props.name, INPUT_STATUS.INVALID);
      }
    }

    return (
      <div className={ `icon-input ${activated ? 
        (inputState == INPUT_STATUS.INVALID ? "icon-input-errored" : "icon-input-clicked") : "" }` }>
        <img src={ props.icon } alt="icon" />
        <input type={ props.type }
          name={ props.name }
          onFocus={ handleFocusEvent }
          onBlur={ handleBlurEvent }
          placeholder={ props.hint }></input>
      </div>
    );
}

export default IconInput;