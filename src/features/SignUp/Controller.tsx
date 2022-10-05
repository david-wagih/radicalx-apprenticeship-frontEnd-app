import validator from 'validator';

<<<<<<< HEAD
//FIXME we need to set the error message when the user hits the submit button not with every click
=======
>>>>>>> 1a2dd55600af270dae5403cd5ca2fb17d5d13baf
export const validatePassword = (
    value: string,
    setPasswordErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
    setPasswordErrorMessage('');
<<<<<<< HEAD
    if (
=======
    if (value == '') {
        setPasswordErrorMessage('Password is required');
    } else if (
>>>>>>> 1a2dd55600af270dae5403cd5ca2fb17d5d13baf
        !validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })
    ) {
        setPasswordErrorMessage('Is Not Strong Password');
    }
};

export const validateEmail = (
    value: string,
    setEmailErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
    setEmailErrorMessage('');
    const email = value;
<<<<<<< HEAD

    if (!validator.isEmail(email)) {
        setEmailErrorMessage('Please, enter valid Email!');
    }
};
=======
    if (email == '') {
        setEmailErrorMessage('Email is required');
    } else if (!validator.isEmail(email)) {
        setEmailErrorMessage('Please, enter valid Email!');
    }
};

export const handleSubmit = (
    email: string,
    password: string,
    setEmailErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    setPasswordErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
    return (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validateEmail(email, setEmailErrorMessage);
        validatePassword(password, setPasswordErrorMessage);
    };
};
>>>>>>> 1a2dd55600af270dae5403cd5ca2fb17d5d13baf
