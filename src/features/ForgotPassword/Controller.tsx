import validator from 'validator';

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