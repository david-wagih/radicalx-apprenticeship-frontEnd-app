import { validateEmail, validatePassword } from './Controller';

export const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    setEmailErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    setPasswordErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
    e.preventDefault();
    if (
        validateEmail(email, setEmailErrorMessage) &&
        validatePassword(password, setPasswordErrorMessage)
    ) {
        fetch(`${baseurl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(response => response.json())
            .then(data => {
                const token = data.token;
            });
    }
};
