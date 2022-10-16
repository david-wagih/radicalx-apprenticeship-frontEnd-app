import validator from 'validator';

export const validatePassword = (
    value: string,
    setPasswordErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
    setPasswordErrorMessage('');
    if (value == '') {
        setPasswordErrorMessage('Password is required');
        return false;
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
        return false;
    } else {
        return true;
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
        return false;
    } else if (!validator.isEmail(email)) {
        setEmailErrorMessage('Please, enter valid Email!');
        return false;
    } else {
        return true;
    }
};
