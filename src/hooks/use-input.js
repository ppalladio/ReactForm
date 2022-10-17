// import { useState } from 'react';

// const useInput = (validateValue) => {
//     const [enteredValue, setEnteredValue] = useState('');
//     const [isTouched, setIsTouched] = useState(false);

//     const valueIsValid = validateValue(enteredValue);
//     const hasError = !valueIsValid && isTouched;

//     const valueChangeHandler = (e) => {
//         setEnteredValue(e.target.value);
//     };

//     const lostFocusHandler = (_e) => {
//         setIsTouched(true);
//     };
//     const resetFunc =()=>{
//         setEnteredValue('')
//         setIsTouched(false)
//     }
//     return {
//         value: enteredValue,
//         isValid:valueIsValid,
//         hasError: hasError,
//         valueChangeHandler,
//         lostFocusHandler,
//         resetFunc
//     };
// };

//::   usereducer                :
import { useReducer } from 'react';
const init = {
    value: '',
    isTouched: false,
};
const inputReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === 'BLUR') {
        return { isTouched: true, value: state.value };
    }
    if (action.type === 'RESET') {
        return { isTouched: false, value: '' };
    }
    return init;
};
const useInput = (validateValue) => {
    const [inputState, dispatchInput] = useReducer(inputReducer, init);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (e) => {
        dispatchInput({ type: 'INPUT', value: e.target.value });
    };

    const lostFocusHandler = (e) => {
        dispatchInput({ type: 'BLUR' });
    };
    const resetFunc = () => {
        dispatchInput({ type: 'RESET' });
    };
    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError: hasError,
        valueChangeHandler,
        lostFocusHandler,
        resetFunc,
    };
};

export default useInput;
