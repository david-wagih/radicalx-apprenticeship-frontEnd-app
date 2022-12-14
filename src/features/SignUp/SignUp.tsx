import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InputField from '../../components/InputField/InputField';

import { validateEmail, validatePassword } from './Controller';
import { handleSubmit } from './Service';

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
    };
    const navigate = useNavigate();
    return (
        <>
            <div className="pos fixed top-0 left-0 z-[1] h-screen w-1/2 overflow-hidden bg-rdx-purple"></div>
            <div className="pos fixed top-0 right-0 z-[1] h-screen w-1/2 overflow-hidden ">
                <img
                    alt="RadicalX Logo"
                    src="public/assets/Images/RadicalX logo.png"
                    className="fixed top-[77px] left-[1034px] h-[40px] w-[200px]"
                />
                <form
                    className="fixed top-[300px] left-[954px] flex-auto space-y-4"
                    onSubmit={e =>
                        handleSubmit(
                            e,
                            form.email,
                            form.password,
                            form.name,
                            form.phoneNumber,
                            setEmailErrorMessage,
                            setPasswordErrorMessage,
                            navigate
                        )
                    }
                >
                    <p className="text-xl font-medium leading-[24px] tracking-[.4px]">
                        Sign Up
                    </p>
                    <div className="flex  h-[48px] w-[360px] rounded-2xl border-2 border-[#CECECE] bg-[#F5F5F7] pl-5">
                        <img
                            alt="ProfileIcon"
                            src="public/assets/Images/profileIcon.svg"
                            className="h-[22px] w-[18px] flex-none translate-y-2.5 "
                        ></img>
                        <InputField
                            value={form.name}
                            type="text"
                            className="h-[44px] w-[300px] rounded-2xl border-none bg-[#F5F5F7] pl-1 text-[#2F3031] outline-none"
                            name="name"
                            placeholder="Name"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="flex  h-[48px] w-[360px] rounded-2xl border-2 border-[#CECECE] bg-[#F5F5F7] pl-5">
                        <img
                            alt="mobileIcon"
                            src="public/assets/Images/mobileIcon.svg"
                            className="h-[22px] w-[18px] flex-none translate-y-2.5 "
                        ></img>
                        <InputField
                            value={form.phoneNumber}
                            type="phone"
                            className="h-[44px] w-[300px] rounded-2xl border-none bg-[#F5F5F7] pl-1 text-[#2F3031] outline-none"
                            name="phoneNumber"
                            placeholder="PhoneNumber"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="flex  h-[48px] w-[360px] rounded-2xl border-2 border-[#CECECE] bg-[#F5F5F7] pl-5">
                        <img
                            alt="MailIcon"
                            src="public/assets/Images/sms.svg"
                            className="h-[22px] w-[18px] flex-none translate-y-2.5 "
                        ></img>
                        <InputField
                            value={form.email}
                            type="text"
                            className="h-[44px] w-[300px] rounded-2xl border-none bg-[#F5F5F7] pl-1 text-[#2F3031] outline-none"
                            name="email"
                            placeholder="Email"
                            onChange={changeHandler}
                        />
                    </div>
                    {emailErrormessage && (
                        <div className="flex h-[40px] w-[360px] items-center self-center rounded-2xl bg-[#FDEDED] py-2 pl-5 text-[#5F2120]	">
                            <img
                                alt="AlertIcon"
                                src="public/assets/Images/alertIconRed.svg"
                                className="h-[22px] w-[18px] flex-none  "
                            ></img>
                            <span className="pl-1">{emailErrormessage}</span>
                        </div>
                    )}
                    <div className="flex h-[48px] w-[360px] rounded-2xl border-2 border-[#CECECE] bg-[#F5F5F7] pl-5">
                        <img
                            alt="lockIcon"
                            src="public/assets/Images/lockIcon.svg"
                            className="h-[22px] w-[18px] flex-none translate-y-2.5 "
                        ></img>
                        <InputField
                            value={form.password}
                            type={passwordShown ? 'text' : 'password'}
                            className="h-[44px] w-[280px] rounded-2xl border-none bg-[#F5F5F7] pl-1 text-[#2F3031] outline-none"
                            name="password"
                            placeholder="Password"
                            onChange={changeHandler}
                        />
                        <button type="button" onClick={togglePassword}>
                            <img
                                alt="show Password"
                                src="public/assets/Images/visible.svg"
                                className="relative  translate-y-0.5 pl-2"
                            ></img>
                        </button>
                    </div>
                    {passwordErrorMessage && (
                        <div className="flex h-[40px] w-[360px] items-center self-center rounded-2xl bg-[#FDEDED] py-2 pl-5 text-[#5F2120]	">
                            <img
                                alt="AlertIcon"
                                src="public/assets/Images/alertIconRed.svg"
                                className="h-[22px] w-[18px] flex-none  "
                            ></img>
                            <span className="pl-1">{passwordErrorMessage}</span>
                        </div>
                    )}
                    <button
                        name="signUp"
                        className="h-[48px] w-[360px] rounded-2xl  border-2 border-[#CECECE] bg-rdx-purple text-[#FFFFFF] "
                        type="submit"
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
