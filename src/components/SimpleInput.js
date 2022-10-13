import { useState, useRef } from 'react';

const SimpleInput = (props) => {
    /**
     * 'which one should we use?
     * 'useRef is we only need the value once
     * 'useState if we need to reset every input, or for every instance
     */
    // const nameInputRef = useRef();//' if we are using useRef
    const [enteredName, setEnteredName] = useState('');
    // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);


    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; //# only when user tried to inout and the input is invalid, then we can say the name input is invalid

    const nameInputHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const lostFocusHandler = (e) => {
        setEnteredNameTouched(true);

    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();
        setEnteredNameTouched(true);
        if (!enteredNameIsValid) {
           return
        }

        // const enteredValue = nameInputRef.current.value;//' if we are using useRef
        // console.log(enteredValue);//' if we are using useRef
        setEnteredName(''); //.if we are clearing the input field
        setEnteredNameTouched(false); 
    };


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
                    onBlur={lostFocusHandler}
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
