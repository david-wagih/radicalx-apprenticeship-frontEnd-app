//TODO:here we add functions that validate inputs in the client side
//set error messages for each input

export const validateEmail = (email: string,  setEmailErrorMessage: React.Dispatch<React.SetStateAction<string>>) => {
    setEmailErrorMessage('');
};
export const validatePassword = (
    password: string,
    setPasswordErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
    setPasswordErrorMessage('');

  
};
