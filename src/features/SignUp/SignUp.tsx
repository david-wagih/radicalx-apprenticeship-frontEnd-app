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
        if (e.currentTarget.name === 'email') {
            validateEmail(e.target.value, setEmailErrorMessage);
        }
        if (e.currentTarget.name === 'password') {
            validatePassword(e.target.value, setPasswordErrorMessage);
        }
        setForm({
            ...form,
            [e.currentTarget.name]: e.currentTarget.value
        });
        console.log('change', form);
    };

    const handleSubmit = () => {
        console.log('submit', form);
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
                <form
                    className="top-[300px] left-[954px] fixed flex-auto space-y-4"
                    onSubmit={handleSubmit}
                >
                    <p className="text-xl font-medium tracking-[.4px] leading-[24px]">
                        Sign Up
                    </p>
                    <div className="flex  w-[360px] h-[48px] rounded-2xl bg-[#F5F5F7] border-2 border-[#CECECE] pl-5">
                        <img
                            alt="ProfileIcon"
                            src="src/assets/Images/profileIcon.svg"
                            className="flex-none w-[18px] h-[22px] translate-y-2.5 "
                        ></img>
                        <NonRequiredInput
                            type="text"
                            className="w-[300px] h-[44px] rounded-2xl bg-[#F5F5F7] text-[#2F3031] border-none outline-none pl-1"
                            name="name"
                            defaultValue=""
                            placeholder="Name"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="flex  w-[360px] h-[48px] rounded-2xl bg-[#F5F5F7] border-2 border-[#CECECE] pl-5">
                        <img
                            alt="ProfileIcon"
                            src="src/assets/Images/mobileIcon.svg"
                            className="flex-none w-[18px] h-[22px] translate-y-2.5 "
                        ></img>
                        <NonRequiredInput
                            type="number"
                            className="w-[300px] h-[44px] rounded-2xl bg-[#F5F5F7] text-[#2F3031] border-none outline-none pl-1"
                            name="phoneNumber"
                            defaultValue=""
                            placeholder="PhoneNumber"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="flex  w-[360px] h-[48px] rounded-2xl bg-[#F5F5F7] border-2 border-[#CECECE] pl-5">
                        <img
                            alt="MailIcon"
                            src="src/assets/Images/sms.svg"
                            className="flex-none w-[18px] h-[22px] translate-y-2.5 "
                        ></img>
                        <InputField
                            type="text"
                            className="w-[300px] h-[44px] rounded-2xl bg-[#F5F5F7] text-[#2F3031] border-none outline-none pl-1"
                            name="email"
                            defaultValue=""
                            placeholder="Email"
                            // onChange={e =>
                            //     validateEmail(e.target.value, setEmailErrorMessage)
                            // }
                            onChange={changeHandler}
                        />
                    </div>
                    {emailErrormessage && (
                        <div className="flex w-[360px] h-[40px] rounded-2xl bg-[#FDEDED] text-[#5F2120] items-center self-center py-2 pl-5	">
                            <img
                                alt="AlertIcon"
                                src="src/assets/Images/alertIconRed.svg"
                                className="flex-none w-[18px] h-[22px]  "
                            ></img>
                            <span className="pl-1">{emailErrormessage}</span>
                        </div>
                    )}
                    <div className="flex w-[360px] h-[48px] rounded-2xl bg-[#F5F5F7] border-2 border-[#CECECE] pl-5">
                        <img
                            alt="lockIcon"
                            src="src/assets/Images/passLock.svg"
                            className="flex-none w-[18px] h-[22px] translate-y-2.5 "
                        ></img>
                        <InputField
                            type={passwordShown ? 'text' : 'password'}
                            className="w-[280px] h-[44px] rounded-2xl bg-[#F5F5F7] text-[#2F3031] border-none outline-none pl-1"
                            name="password"
                            defaultValue=""
                            placeholder="Password"
                            // onChange={e =>
                            //     validatePassword(
                            //         e.target.value,
                            //         setPasswordErrorMessage
                            //     )
                            // }
                            onChange={changeHandler}
                        />
                        <button onClick={togglePassword}>
                            <img
                                alt="show Password"
                                src="src/assets/Images/visible.svg"
                                className="relative  pl-2 translate-y-0.5"
                            ></img>
                        </button>
                    </div>
                    {passwordErrorMessage && (
                        <div className="flex w-[360px] h-[40px] rounded-2xl bg-[#FDEDED] text-[#5F2120] items-center self-center py-2 pl-5	">
                            <img
                                alt="AlertIcon"
                                src="src/assets/Images/alertIconRed.svg"
                                className="flex-none w-[18px] h-[22px]  "
                            ></img>
                            <span className="pl-1">{passwordErrorMessage}</span>
                        </div>
                    )}
                    <button
                        type="submit"
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
