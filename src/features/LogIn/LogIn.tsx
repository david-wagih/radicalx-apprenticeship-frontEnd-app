import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    const [rememberMe, setRememberMe] = useState(false);

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
        <div className="login-page relative h-screen w-screen ">
            <div className="purple-half absolute inset-y-0 left-0 h-[982px] w-[756px]  bg-rdx-purple "></div>
            <div className="white-half absolute left-[756px] h-[982px] w-[756px] bg-white"></div>
            <img
                className="logo absolute left-[1034px] top-[77px] h-[40px] w-[200px] "
                alt="RadicalX Logo"
                src="public/assets/Images/RadicalX logo.png"
            />
            <form
                className="form width-[360px] absolute left-[954px] top-[250px] flex h-[256px] max-h-[500px] flex-col items-start gap-[20px] p-0"
                onSubmit={e =>
                    handleSubmit(
                        e,
                        form.email,
                        form.password,
                        rememberMe,
                        setEmailErrorMessage,
                        setPasswordErrorMessage,
                        navigate
                    )
                }
            >
                <p className="Login-span font-Space Grotesk order-none h-[24px] w-[66px] flex-none grow-0 p-0 text-center text-2xl font-medium not-italic leading-6 tracking-widest text-black">
                    Login
                </p>
                <div className="email flex h-[48px] w-[360px] rounded-2xl border-2 border-[#CECECE] bg-[#F5F5F7] pl-3">
                    <img
                        alt="MailIcon"
                        src="public/assets/Images/sms.svg"
                        className="m-[0] mr-[5px] h-[22px] w-[18px] flex-none translate-y-2.5"
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
                <div className="flex h-[48px] w-[360px] rounded-2xl border-2 border-[#CECECE] bg-[#F5F5F7] pl-3">
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
                <div className="order-1 flex h-[24px] w-[360px] flex-none grow-0 flex-row items-start justify-between gap-[20px] p-0">
                    <RememberMe
                        rememberMe={rememberMe}
                        setRememberMe={setRememberMe}
                    />
                    <Link to="/ForgotPassword">
                        <p className="w-146px h-24px font-Space Grotesk text-center text-base font-medium not-italic leading-6 tracking-wider  text-rdx-purple">
                            {' '}
                            Forget Password?
                        </p>
                    </Link>
                </div>
                <button
                    name="Login"
                    className="font-Space Grotesk order-2 flex h-[48px] w-[360px] flex-none grow-0 flex-row items-center justify-center gap-[29px] self-stretch rounded-2xl bg-rdx-purple px-[10px] py-[16px] text-center text-base font-medium text-white"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LogIn;
