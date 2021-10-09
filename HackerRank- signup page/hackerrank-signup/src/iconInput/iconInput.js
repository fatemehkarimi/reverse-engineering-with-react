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

    const validateInput = (e) => {
      var valid = validate(e.target.value, props.validators);
      if(valid) 
        setInputState(INPUT_STATUS.VALID);
      else
        setInputState(INPUT_STATUS.INVALID);
      return valid;
    }

    const handleChangeEvent = (e) => {
      if(inputState == INPUT_STATUS.UNTOUCHED)
        return;
      validateInput(e);
    }

    const handleBlurEvent = (e) => {
      if(validateInput(e))
        setActivated(false);
    }

    return (
      <div className={ `icon-input ${activated ? 
        (inputState == INPUT_STATUS.INVALID ? "icon-input-errored" : "icon-input-clicked") : "" }` }>
        <img src={ props.icon } alt="icon" />
        <input type={ props.type }
          name={ props.name }
          onFocus={ () => setActivated(true) }
          onChange={ handleChangeEvent }
          onBlur={ handleBlurEvent }
          placeholder={ props.hint }></input>
      </div>
    );
}

export default IconInput;