import { NavigateFunction } from 'react-router-dom';

import { auth } from '../../PrivateRoutes';

import { validateEmail, validatePassword } from './Controller';

export const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    setEmailErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    setPasswordErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    navigate: NavigateFunction
) => {
    e.preventDefault();
    if (
        validateEmail(email, setEmailErrorMessage) &&
        validatePassword(password, setPasswordErrorMessage)
    ) {
        const response = await fetch(`http://localhost:4000/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                username: name,
                phoneNumber: `+20${phoneNumber}`
            })
        });
        if (response.ok) {
            const json = await response.json();
            auth.isAuthorized = true;
            localStorage.setItem('customToken', json.customToken);
            localStorage.setItem('userId', json.userID);
            navigate('/homepage');
        }
    }
};
