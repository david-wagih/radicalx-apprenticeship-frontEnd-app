import { FC, useState } from 'react';
import validator from 'validator';

import InputField from '../../components/InputField/InputField';
import NonRequiredInput from '../../components/NonRequiredInputField/NonRequiredInputField';

import { validateEmail, validatePassword } from './Controller';

const SignUp: FC = () => {
    const [form, setForm] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        password: ''
    });

    const [emailErrormessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                <form className="top-[300px] left-[954px] fixed flex-auto space-y-4">
                    <p className="text-xl font-medium tracking-[.4px] leading-[24px]">
                        Sign Up
                    </p>
                    <NonRequiredInput
                        type="text"
                        className="w-[360px] h-[48px] rounded-2xl bg-[#F5F5F7] text-[#2F3031] border-2 border-[#CECECE] bg-[url('./assets/Images/profileIcon.svg')] bg-[center_left_1rem] bg-no-repeat  pl-10"
                        name="name"
                        defaultValue=""
                        placeholder="Name"
                        onChange={e => e}
                    />
                    <NonRequiredInput
                        type="number"
                        className="w-[360px] h-[48px] rounded-2xl bg-[#F5F5F7] text-[#2F3031] border-2 border-[#CECECE] bg-[url('./assets/Images/mobileIcon.svg')] bg-[center_left_1rem] bg-no-repeat  pl-10"
                        name="phoneNumber"
                        defaultValue=""
                        placeholder="PhoneNumber"
                        onChange={e => e}
                    />
                    <InputField
                        type="text"
                        className="w-[360px] h-[48px] rounded-2xl bg-[#F5F5F7] text-[#2F3031] border-2 border-[#CECECE] bg-[url('./assets/Images/sms.svg')] bg-[center_left_1rem] bg-no-repeat  pl-10"
                        name="email"
                        defaultValue=""
                        placeholder="Email"
                        onChange={e =>
                            validateEmail(e.target.value, setEmailErrorMessage)
                        }
                    />
                    {emailErrormessage && (
                        <span
                            style={{
                                fontWeight: 'bold',
                                color: 'red'
                            }}
                        >
                            {emailErrormessage}
                        </span>
                    )}
                    <div className="w-[360px] h-[48px] rounded-2xl bg-[#F5F5F7] border-2 border-[#CECECE]">
                        <InputField
                            type={passwordShown ? 'text' : 'password'}
                            className=" w-[300px] h-[44px] rounded-2xl bg-[#F5F5F7] text-[#2F3031] border-0 border-[#CECECE] bg-[url('./assets/Images/lock.svg')] bg-[center_left_-12.5rem] bg-no-repeat  pl-10"
                            name="password"
                            defaultValue=""
                            placeholder="Password"
                            onChange={e =>
                                validatePassword(
                                    e.target.value,
                                    setPasswordErrorMessage
                                )
                            }
                        />
                        <button onClick={togglePassword}>
                            <img
                                alt="show Password"
                                src="src/assets/Images/visible.svg"
                                className="relative  pl-5 translate-y-0.5"
                            ></img>
                        </button>
                    </div>
                    {passwordErrorMessage && (
                        <span
                            style={{
                                fontWeight: 'bold',
                                color: 'red'
                            }}
                        >
                            {passwordErrorMessage}
                        </span>
                    )}
                    <button
                        name="signUp"
                        className="w-[360px] h-[48px] rounded-2xl  bg-rdx-purple text-[#FFFFFF] border-2 border-[#CECECE] "
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
