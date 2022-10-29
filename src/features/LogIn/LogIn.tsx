import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import InputField from '../../components/InputField/InputField';

import RememberMe from './RememberMe/RememberMe';
import { validateEmail, validatePassword } from './Controller';
import { handleSubmit } from './Service';

const LogIn: FC = () => {
    const [form, setForm] = useState({
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
    return (
        <div className="login-page relative h-screen w-screen ">
            <div className="purple-half absolute inset-y-0 left-0 h-[982px] w-[756px]  bg-rdx-purple "></div>
            <div className="white-half absolute h-[982px] w-[756px] bg-white left-[756px]"></div>
            <img
                className="logo absolute w-[200px] h-[40px] left-[1034px] top-[77px] "
                alt="RadicalX Logo"
                src="src/assets/Images/RadicalX logo.png"
            />
            <form
                className="form flex gap-[20px] flex-col items-start p-0 absolute width-[360px] max-h-[500px] h-[256px] left-[954px] top-[250px]"
                onSubmit={e =>
                    handleSubmit(
                        e,
                        form.email,
                        form.password,
                        setEmailErrorMessage,
                        setPasswordErrorMessage
                    )
                }
            >
                <p className="Login-span w-[66px] h-[24px] font-Space Grotesk not-italic font-medium text-2xl leading-6 text-center tracking-widest flex-none order-none grow-0 text-black p-0">
                    Login
                </p>
                <div className="email flex h-[48px] w-[360px] rounded-2xl border-2 border-[#CECECE] bg-[#F5F5F7] pl-3">
                    <img
                        alt="MailIcon"
                        src="src/assets/Images/sms.svg"
                        className="h-[22px] w-[18px] flex-none translate-y-2.5 m-[0] mr-[5px]"
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
                            src="src/assets/Images/alertIconRed.svg"
                            className="h-[22px] w-[18px] flex-none  "
                        ></img>
                        <span className="pl-1">{emailErrormessage}</span>
                    </div>
                )}
                <div className="flex h-[48px] w-[360px] rounded-2xl border-2 border-[#CECECE] bg-[#F5F5F7] pl-3">
                    <img
                        alt="lockIcon"
                        src="src\assets\Images\lockIcon.svg"
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
                            src="src/assets/Images/visible.svg"
                            className="relative  translate-y-0.5 pl-2"
                        ></img>
                    </button>
                </div>
                {passwordErrorMessage && (
                    <div className="flex h-[40px] w-[360px] items-center self-center rounded-2xl bg-[#FDEDED] py-2 pl-5 text-[#5F2120]	">
                        <img
                            alt="AlertIcon"
                            src="src/assets/Images/alertIconRed.svg"
                            className="h-[22px] w-[18px] flex-none  "
                        ></img>
                        <span className="pl-1">{passwordErrorMessage}</span>
                    </div>
                )}
                <div className="flex flex-row justify-between items-start p-0 gap-[20px] w-[360px] h-[24px] flex-none order-1 grow-0">
                    <RememberMe />
                    <Link to="/ForgotPassword">
                        <p className="w-146px h-24px font-Space Grotesk not-italic font-medium text-base leading-6 text-center tracking-wider  text-rdx-purple">
                            {' '}
                            Forget Password?
                        </p>
                    </Link>
                </div>
                <button
                    name="Login"
                    className="flex flex-row justify-center items-center px-[10px] py-[16px] gap-[29px] w-[360px] h-[48px] bg-rdx-purple rounded-2xl flex-none order-2 self-stretch grow-0 text-base text-center font-Space Grotesk font-medium text-white"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LogIn;
