import useInput from '../hooks/use-input';

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        isValid: enteredFirstnameIsValid,
        hasError: firstnameInputError,
        valueChangeHandler: firstnameInputHandler,
        lostFocusHandler: firstnameBlurHandler,
        resetFunc: resetFirstname,
    } = useInput((value) => value.trim() !== 0);

    const {
        value: enteredLastname,
        isValid: enteredLastnameIsValid,
        hasError: lastnameInputError,
        valueChangeHandler: lastnameInputHandler,
        lostFocusHandler: lastnameBlurHandler,
        resetFunc: resetLastname,
    } = useInput((value) => value.trim() !== 0);

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputError,
        valueChangeHandler: emailInputHandler,
        lostFocusHandler: emailBlurHandler,
        resetFunc: resetEmail,
    } = useInput((value) => value.includes('@'));

    let formIsValid = false;
    if (
        enteredFirstnameIsValid &&
        enteredLastnameIsValid &&
        enteredEmailIsValid
    ) {
        formIsValid = true;
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (!formIsValid) {
            return;
        }

        resetFirstname();
        resetLastname();
        resetEmail();
    };

    const firstnameInputClasses = firstnameInputError
        ? 'form-control invalid'
        : 'form-control';

    const lastnameInputClasses = lastnameInputError
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = emailInputError
        ? 'form-control invalid'
        : 'form-control';
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="control-group">
                <div className={firstnameInputClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        value={enteredFirstName}
                        onChange={firstnameInputHandler}
                        onBlur={firstnameBlurHandler}
                        type="text"
                        id="name"
                    />
                    {firstnameInputError && 
                        <p> please enter a valid first name</p>
                    }
                </div>
                <div className={lastnameInputClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        value={enteredLastname}
                        onChange={lastnameInputHandler}
                        onBlur={lastnameBlurHandler}
                        type="text"
                        id="name"
                    />
                    {lastnameInputError && 
                        <p> please enter a valid last name</p>
                    }
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    value={enteredEmail}
                    onChange={emailInputHandler}
                    onBlur={emailBlurHandler}
                    type="text"
                    id="name"
                />
                {emailInputError && <p> please enter a valid email address</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
