import { FC, useState } from 'react';

import InputField from '../../components/InputField/InputField';

import { validateEmail } from './Controller';

const ForgotPassword: FC = () => {
    const [form, setForm] = useState({
        email: ''
    });
    const [emailErrormessage, setEmailErrorMessage] = useState('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'email') {
            validateEmail(e.target.value, setEmailErrorMessage);
        }
        setForm({
            ...form,
            [e.currentTarget.name]: e.currentTarget.value
        });
    };
    return (
        <div className="forgotpassword-page relative h-screen w-screen ">
            <div className="purple-half absolute inset-y-0 left-0 h-[982px] w-[756px]  bg-rdx-purple "></div>
            <div className="white-half absolute left-[756px] h-[982px] w-[756px] bg-white"></div>
            <img
                className="logo absolute left-[1034px] top-[77px] h-[40px] w-[200px] "
                alt="RadicalX Logo"
                src="src/assets/Images/RadicalX logo.png"
            />
            <form className="form width-[360px] absolute left-[954px] top-[250px] flex h-[256px] max-h-[500px] flex-col items-start gap-[20px] p-0">
                <p className="EnterEmail-span font-Space Grotesk order-none h-[24px] w-[250px] flex-none grow-0 p-0 text-center text-2xl font-medium not-italic leading-6 tracking-widest text-black">
                    Enter your Email
                </p>
                <div className="email flex h-[48px] w-[360px] rounded-2xl border-2 border-[#CECECE] bg-[#F5F5F7] pl-3">
                    <img
                        alt="MailIcon"
                        src="src/assets/Images/sms.svg"
                        className="m-[0] mr-[5px] h-[22px] w-[18px] flex-none translate-y-2.5"
                    ></img>
                    <InputField
                        value={form.email}
                        type="text"
                        className="h-[44px] w-[300px] rounded-2xl border-none bg-[#F5F5F7] pl-1 text-[#2F3031] outline-none"
                        name="email"
                        defaultValue=""
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
                <button
                    name="Reset"
                    className="font-Space Grotesk order-2 flex h-[48px] w-[360px] flex-none grow-0 flex-row items-center justify-center gap-[29px] self-stretch rounded-2xl bg-rdx-purple px-[10px] py-[16px] text-center text-base font-medium text-white"
                    type="submit"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
