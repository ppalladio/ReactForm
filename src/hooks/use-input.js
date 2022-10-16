import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue();
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    const lostFocusHandler = (e) => {
        setIsTouched(true);
    };
    return {
        value: enteredValue,
        hasError: hasError,
        valueChangeHandler,
        lostFocusHandler,
    };
};

export default useInput;
