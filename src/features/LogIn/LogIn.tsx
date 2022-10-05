/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react';

import InputField from '../../components/InputField/InputField';

import RememberMe from './RememberMe/RememberMe';
import { handleSubmit, validateEmail, validatePassword } from './Controller';

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
        <>
            <div className=" relative h-screen w-screen ">
                <div className=" absolute inset-y-0 left-0 h-[982px] w-[756px]  bg-rdx-purple "></div>

                <div className=" absolute h-[982px] w-[756px] bg-white left-[756px]"></div>
                <img
                    alt="RadicalX Logo"
                    src="src/assets/Images/RadicalX logo.png"
                    className="absolute w-[200px] h-[40px] left-[1034px]  top-[77px] "
                />
                <div className="flex flex-col items-start p-0 gap-[20px] absolute width-[360px] height-[256px] left-[954px] top-[363px] ">
                    <form className="">
                        <p className="w-[66px] h-[24px] font-Space Grotesk not-italic font-medium text-2xl leading-6 text-center tracking-widest flex-none order-none grow-0 text-black p-0 mb-[15px]">
                            Login
                        </p>
                        <div className="flex flex-col items-start p-0 gap-[12px] w-[360px] h-[144px] flex-none order-1 grow-0">
                            <label className="relative block">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        width="20"
                                        height="20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.333 10.816v2.1c0 2.917-1.666 4.167-4.166 4.167H5.833c-2.5 0-4.166-1.25-4.166-4.166V7.082c0-2.917 1.666-4.167 4.166-4.167h8.334c2.5 0 4.166 1.25 4.166 4.167"
                                            stroke="#8A8B8C"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="m14.167 7.5-2.609 2.083c-.858.684-2.266.684-3.125 0L5.833 7.5"
                                            stroke="#8A8B8C"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>{' '}
                                </span>
                                <InputField
                                    type="text"
                                    className=" border-gray-600 border p-2  bg-gray-200 text-gray-500  pl-10 pr-4 box-border flex flex-row items-center px-[10px] py-[16px] gap-[8px] w-[360px] h-[48px] rounded-2xl flex-none order-0 grow-0"
                                    name="email"
                                    defaultValue={form.email}
                                    placeholder="Email"
                                    onChange={e => changeHandler(e)}
                                />
                            </label>
                            <label className="relative block">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        width="20"
                                        height="20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mb-[20px]"
                                    >
                                        <path
                                            d="M5 8.333V6.666c0-2.758.833-5 5-5s5 2.242 5 5v1.667M7.917 13.333A2.084 2.084 0 1 0 10 11.25"
                                            stroke="#8A8B8C"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M18.333 14.167V12.5c0-3.333-.833-4.166-4.166-4.166H5.833c-3.333 0-4.166.833-4.166 4.166v1.667c0 3.333.833 4.167 4.166 4.167h8.334c1.466 0 2.45-.159 3.091-.625"
                                            stroke="#8A8B8C"
                                            stroke-width="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>{' '}
                                </span>
                                <InputField
                                    type={passwordShown ? 'text' : 'password'}
                                    className=" border-gray-600 border p-2  bg-gray-200 text-gray-500  pl-10 pr-4 box-border flex flex-row items-center px-[10px] py-[16px] gap-[8px] w-[360px] h-[48px] rounded-2xl flex-none order-0 grow-0"
                                    name="password"
                                    defaultValue={form.password}
                                    placeholder="Password"
                                    onChange={e => changeHandler(e)}
                                />
                                <button type="button" onClick={togglePassword}>
                                    <img
                                        alt="show Password"
                                        src="src/assets/Images/visible.svg"
                                        className="relative  translate-y-0.5 pl-2 left-[317px] top-[-34px]"
                                    ></img>
                                </button>
                            </label>
                        </div>
                        <div className="flex flex-row justify-between items-start p-0 gap-[20px] w-[360px] h-[24px] flex-none order-1 grow-0">
                            <RememberMe />
                            <p className="w-146px h-24px font-Space Grotesk not-italic font-medium text-base leading-6 text-center tracking-wider  text-rdx-purple">
                                {' '}
                                Forget Password?
                            </p>
                        </div>
                        <div className="flex flex-row justify-center items-center px-[10px] py-[16px] gap-[29px] mt-[10px] w-[360px] h-[48px] bg-rdx-purple rounded-2xl flex-none order-2 self-stretch grow-0 text-base text-center font-Space Grotesk font-medium ">
                            <button
                                name="Login"
                                className="flex flex-row justify-between w-[45px] h-[20px] rounded-2xl flex-none order-2 self-stretch grow-0  font-Space Grotesk font-medium text-white text-justify"
                                onClick={e =>
                                    handleSubmit(
                                        form.email,
                                        form.password,
                                        setEmailErrorMessage,
                                        setPasswordErrorMessage
                                    )
                                }
                            >
                                {' '}
                                Login{' '}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LogIn;
