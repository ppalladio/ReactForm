import { useState, useRef } from 'react';

const SimpleInput = (props) => {
  /**
   * 'which one should we use? 
   * 'useRef is we only need the value once
   * 'useState if we need to reset every input, or for every instance
   */
    // const nameInputRef = useRef();//' if we are using useRef
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)

    const nameInputHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        if (enteredName.trim() === '') {
          setEnteredNameIsValid(false);
          return;
        }

        setEnteredNameIsValid(true)
        console.log(enteredName);
        // const enteredValue = nameInputRef.current.value;//' if we are using useRef
        // console.log(enteredValue);//' if we are using useRef
        setEnteredName('')//.if we are clearing the input field
    };

    const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    // ref={nameInputRef} //' if we are using useRef
                    type="text"
                    id="name"
                    onChange={nameInputHandler}
                    value={enteredName} //.if we are clearing the input field
                />
            </div>
            {!enteredNameIsValid && <p className='error-text'>'must enter a valid name'</p> }
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
