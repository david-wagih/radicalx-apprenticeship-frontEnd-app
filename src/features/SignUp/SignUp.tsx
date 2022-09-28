import { FC, useState } from 'react';

import InputField from '../../components/InputField';

const SignUp: FC = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const changeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    const showState = () => {
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
                <div className="top-[363px] left-[954px] fixed flex-auto space-y-8">
                    <p className="text-xl font-medium tracking-[.4px] leading-[24px]">
                        Sign Up
                    </p>

                    <InputField
                        type="text"
                        //NOTE just example of using tailwind css
                        className="w-[360px] h-[48px] rounded-2xl bg-[#F5F5F7] text-[#CECECE] border-2 border-[#CECECE] "
                        name="email"
                        value=""
                        placeholder="Email"
                        onChange={changeHandler.toString}
                    />
                    <InputField
                        type="text"
                        //NOTE just example of using tailwind css
                        className="w-[360px] h-[48px] rounded-2xl bg-[#F5F5F7] text-[#CECECE] border-2 border-[#CECECE] "
                        name="password"
                        value=""
                        placeholder="Password"
                        onChange={changeHandler.toString}
                    />
                    <button
                        name="signUp"
                        className="w-[360px] h-[48px] rounded-2xl  bg-rdx-purple text-[#FFFFFF] border-2 border-[#CECECE] "
                        onClick={showState}
                    >
                        {' '}
                        Sign up{' '}
                    </button>
                </div>
            </div>
        </>
    );
};

export default SignUp;
