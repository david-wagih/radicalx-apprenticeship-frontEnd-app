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
        console.log(`+20${phoneNumber}`);
        console.log(typeof `+20${phoneNumber}`);
        fetch(`http://localhost:4000/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                username: name,
                phoneNumber: `+20${phoneNumber}`
            })
        }).then(res => console.log(res));
    }
};
