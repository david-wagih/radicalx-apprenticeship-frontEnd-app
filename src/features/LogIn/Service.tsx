import { NavigateFunction } from 'react-router-dom';

import { auth } from '../../PrivateRoutes';

import { setRememberCookies } from './RememberMe/Controller';
import { validateEmail, validatePassword } from './Controller';

export const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    rememberMe: boolean,
    setEmailErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    setPasswordErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    navigate: NavigateFunction
) => {
    e.preventDefault();
    if (
        validateEmail(email, setEmailErrorMessage) &&
        validatePassword(password, setPasswordErrorMessage)
    ) {
        const response = await fetch(`http://localhost:4000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                rememberMe: rememberMe
            })
        });
        if (response.ok) {
            const json = await response.json();
            auth.isAuthorized = true;
            localStorage.setItem('customToken', json.customToken);
            localStorage.setItem('userId', json.userID);
            if (rememberMe) {
                setRememberCookies(json.customToken);
            }
            navigate('/homepage');
        }
    }
};
