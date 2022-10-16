import { validateEmail, validatePassword } from './Controller';

export const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    setEmailErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    setPasswordErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
    e.preventDefault();
    if (
        validateEmail(email, setEmailErrorMessage) &&
        validatePassword(password, setPasswordErrorMessage)
    ) {
        fetch(`${baseurl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                username: name,
                phoneNumber: phoneNumber
            })
        })
            .then(res => res.json())
            .then(data => {
                const token = data.token;
            });
    }
};
