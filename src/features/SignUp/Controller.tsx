import validator from 'validator';

export const validatePassword = (
    value: string,
    setPasswordErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
    setPasswordErrorMessage('');
    if (value == '') {
        setPasswordErrorMessage('Password is required');
    } else if (
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
    if (email == '') {
        setEmailErrorMessage('Email is required');
    } else if (!validator.isEmail(email)) {
        setEmailErrorMessage('Please, enter valid Email!');
    }
};

export const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    setEmailErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    setPasswordErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
    e.preventDefault();
    validateEmail(email, setEmailErrorMessage);
    validatePassword(password, setPasswordErrorMessage);
};
