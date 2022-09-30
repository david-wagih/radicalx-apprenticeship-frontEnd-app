import validator from 'validator';

//FIXME we need to set the error message when the user hits the submit button not with every click
export const validatePassword = (
    value: string,
    setPasswordErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
    setPasswordErrorMessage('');
    if (
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

    if (!validator.isEmail(email)) {
        setEmailErrorMessage('Please, enter valid Email!');
    }
};
