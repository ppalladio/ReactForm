import { useState, useRef } from 'react';
import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
    /**
     * 'which one should we use?
     * 'useRef is we only need the value once
     * 'useState if we need to reset every input, or for every instance
     */
    // const nameInputRef = useRef();//' if we are using useRef

    const {
        value: enteredName,
        hasError: nameInputError,
        isValid: enteredNameIsValid,
        valueChangeHandler: nameInputHandler,
        lostFocusHandler: nameLostFocusHandler,
        resetFunc: resetNameInput,
    } = useInput((value) => value.trim() !== ''); //.we need a functin input
    const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    // const enteredNameIsValid = enteredName.trim() !== '';
    // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; //# only when user tried to inout and the input is invalid, then we can say the name input is invalid
    const enteredEmailIsValid = enteredEmail.includes('@');
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const emailInputChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    };

    const lostFocustHandlerEmail = (e) => {
        setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();
        if (!enteredNameIsValid) {
            return;
        }

        // const enteredValue = nameInputRef.current.value;//' if we are using useRef
        // console.log(enteredValue);//' if we are using useRef
        // setEnteredName(''); //.if we are clearing the input field
        // setEnteredNameTouched(false);
        resetNameInput();
        setEnteredEmail('');
        setEnteredEmailTouched(false);
    };

    const nameInputClasses = nameInputError
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = emailInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    // ref={nameInputRef} //' if we are using useRef
                    type="text"
                    id="name"
                    onChange={nameInputHandler}
                    value={enteredName} //.if we are clearing the input field 'twoway binding'
                    onBlur={nameLostFocusHandler}
                />

                {nameInputError && (
                    <p className="error-text">must enter a valid name</p>
                )}
            </div>
            {/* //'email */}
            <div className={emailInputClasses}>
                <label htmlFor="name">Your Email</label>
                <input
                    // ref={nameInputRef} //' if we are using useRef
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    value={enteredEmail} //.if we are clearing the input field 'twoway binding'
                    onBlur={lostFocustHandlerEmail}
                />
            </div>
            {emailInputIsInvalid && (
                <p className="error-text">must enter a valid email address</p>
            )}
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
