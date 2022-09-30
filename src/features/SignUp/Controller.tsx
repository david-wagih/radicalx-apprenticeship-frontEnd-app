import validator from 'validator';

export const validateEmail = (email: React.ChangeEvent<HTMLInputElement>) => {
    console.log('validate', email);
    if (validator.isEmail(email.toString())) {
        return '';
    } else {
        return 'Please, enter valid Email!';
    }
};

//export const validatePassword = (password: string) => {};
