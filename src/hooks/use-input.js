import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    const lostFocusHandler = (_e) => {
        setIsTouched(true);
    };
    const resetFunc =()=>{
        setEnteredValue('')
        setIsTouched(false)
    }
    return {
        value: enteredValue,
        isValid:valueIsValid,
        hasError: hasError,
        valueChangeHandler,
        lostFocusHandler,
        resetFunc
    };
};

export default useInput;
