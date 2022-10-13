import { useState, useRef } from 'react';

const SimpleInput = (props) => {
    /**
     * 'which one should we use?
     * 'useRef is we only need the value once
     * 'useState if we need to reset every input, or for every instance
     */
    // const nameInputRef = useRef();//' if we are using useRef
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const nameInputHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();
        setEnteredNameTouched(true);
        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }
        setEnteredNameIsValid(true);
        console.log(enteredName);
        // const enteredValue = nameInputRef.current.value;//' if we are using useRef
        // console.log(enteredValue);//' if we are using useRef
        setEnteredName(''); //.if we are clearing the input field
    };

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; //# only when user tried to inout and the input is invalid, then we can say the name input is invalid

    const nameInputClasses = nameInputIsInvalid
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
                />
            </div>
            {nameInputIsInvalid && (
                <p className="error-text">'must enter a valid name'</p>
            )}
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
