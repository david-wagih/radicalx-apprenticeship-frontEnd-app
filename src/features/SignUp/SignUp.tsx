import { FC, useState } from 'react';
import validator from 'validator';

import InputField from '../../components/InputField';

const SignUp: FC = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const validate = (value: any) => {
        if (
            validator.isStrongPassword(value, {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            })
        ) {
            setErrorMessage('Is Strong Password');
        } else {
            setErrorMessage('Is Not Strong Password');
        }
    };

    const validateEmail = (e: any) => {
        const email = e.target.value;

        if (validator.isEmail(email)) {
            setMessage('');
        } else {
            setMessage('Please, enter valid Email!');
        }
    };

    // const changeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const changeHandler = (e: any) => {
        setForm({
            ...form,
            [e.currentTarget.name]: e.currentTarget.value
        });
        console.log(form);
    };

    const handleSubmit = () => {
        console.log(form);
    };
    return (
        <>
            <div className="h-screen w-1/2 pos fixed z-[1] top-0 overflow-hidden left-0 bg-rdx-purple"></div>
            <div className="h-screen w-1/2 pos fixed z-[1] top-0 overflow-hidden right-0 ">
                <img
                    alt="RadicalX Logo"
                    src="src/assets/Images/RadicalX logo.png"
                    className="top-[77px] left-[1034px] w-[200px] h-[40px] fixed"
                />
                <form className="top-[363px] left-[954px] fixed flex-auto space-y-4">
                    <p className="text-xl font-medium tracking-[.4px] leading-[24px]">
                        Sign Up
                    </p>

                    <InputField
                        type="text"
                        //NOTE just example of using tailwind css
                        className="w-[360px] h-[48px] rounded-2xl bg-[#F5F5F7] text-[#CECECE] border-2 border-[#CECECE] "
                        name="email"
                        defaultValue=""
                        placeholder="Email"
                        onChange={e => validateEmail(e)}
                    />
                    <br />
                    <span style={{ fontWeight: 'bold', color: 'red' }}>
                        {' '}
                        {message}
                        <br />
                    </span>
                    <InputField
                        type="text"
                        //NOTE just example of using tailwind css
                        className="w-[360px] h-[48px] rounded-2xl bg-[#F5F5F7] text-[#CECECE] border-2 border-[#CECECE] "
                        name="password"
                        defaultValue=""
                        placeholder="Password"
                        onChange={e => validate(e.target.value)}
                    />
                    {errorMessage === '' ? null : (
                        <span
                            style={{
                                fontWeight: 'bold',
                                color: 'red'
                            }}
                        >
                            {errorMessage}
                        </span>
                    )}
                    <button
                        name="signUp"
                        className="w-[360px] h-[48px] rounded-2xl  bg-rdx-purple text-[#FFFFFF] border-2 border-[#CECECE] "
                        onClick={handleSubmit}
                    >
                        {' '}
                        Sign up{' '}
                    </button>
                </form>
            </div>
        </>
    );
};

export default SignUp;
