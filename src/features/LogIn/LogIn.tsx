/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react';

import InputField from '../../components/InputField/InputField';

const LogIn: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            
        <div className=' relative h-screen w-screen '>

            <div className=' absolute inset-y-0 left-0 h-[982px] w-[756px]  bg-rdx-purple '> 
             </div>
            
            <div className=' absolute h-[982px] w-[756px] bg-white left-[756px]'>
             </div>
            <img alt='RadicalX Logo' src='src/assets/Images/RadicalX logo.png' className='absolute w-[200px] h-[40px] left-[1034px]  top-[77px] '/>
             <div className='flex flex-col items-start p-0 gap-[20px] absolute width-[360px] height-[256px] left-[954px] top-[363px] '>
                <form className=''>
                   <p className='w-[66px] h-[24px] font-Space Grotesk not-italic font-medium text-2xl leading-6 text-center tracking-widest flex-none order-none grow-0 text-black p-0'>Login</p>
                   <div className='flex flex-col items-start p-0 gap-[12px] w-[360px] h-[144px] flex-none order-1 grow-0'>
                      <label className='relative block'>
                          <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                              <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M18.333 10.816v2.1c0 2.917-1.666 4.167-4.166 4.167H5.833c-2.5 0-4.166-1.25-4.166-4.166V7.082c0-2.917 1.666-4.167 4.166-4.167h8.334c2.5 0 4.166 1.25 4.166 4.167" stroke="#8A8B8C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                   <path d="m14.167 7.5-2.609 2.083c-.858.684-2.266.684-3.125 0L5.833 7.5" stroke="#8A8B8C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg> </span>  
                         <InputField   type='text' className=' border-gray-600 border p-2  bg-gray-200 text-gray-500  pl-10 pr-4 box-border flex flex-row items-center px-[10px] py-[16px] gap-[8px] w-[360px] h-[48px] rounded-2xl flex-none order-0 grow-0'  name='email'  defaultValue={email} placeholder='Email' onChange={e => setEmail(e.target.value)}    />
                      </label>
                      <label className='relative block'>
                          <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                              <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5 8.333V6.666c0-2.758.833-5 5-5s5 2.242 5 5v1.667M7.917 13.333A2.084 2.084 0 1 0 10 11.25" stroke="#8A8B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                 <path d="M18.333 14.167V12.5c0-3.333-.833-4.166-4.166-4.166H5.833c-3.333 0-4.166.833-4.166 4.166v1.667c0 3.333.833 4.167 4.166 4.167h8.334c1.466 0 2.45-.159 3.091-.625" stroke="#8A8B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> </span>
                             <InputField  type='text'  className=' border-gray-600 border p-2  bg-gray-200 text-gray-500  pl-10 pr-4 box-border flex flex-row items-center px-[10px] py-[16px] gap-[8px] w-[360px] h-[48px] rounded-2xl flex-none order-0 grow-0' name='password' defaultValue={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
                           <span  className='absolute inset-y-0 right-0 flex items-center pr-3'>
                              <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M7.525 11.667A2.939 2.939 0 0 1 7.017 10 2.98 2.98 0 0 1 10 7.017 2.98 2.98 0 0 1 12.983 10 2.98 2.98 0 0 1 10 12.983" stroke="#8A8B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M14.633 4.65c-1.408-1-2.991-1.542-4.633-1.542-2.942 0-5.683 1.734-7.592 4.734-.75 1.175-.75 3.15 0 4.325 1.909 3 4.65 4.733 7.592 4.733 2.942 0 5.683-1.733 7.592-4.733.75-1.175.75-3.15 0-4.325" stroke="#8A8B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                           </span>             
                      </label> 
                </div>
                <div className='flex flex-row justify-between items-start p-0 gap-[20px] w-[360px] h-[24px] flex-none order-1 grow-0'> 
                  <p className='w-114px h-24px font-Space Grotesk not-italic font-medium text-base leading-6 text-center tracking-widest p-0 gap-[8px]  text-gray-600 '> <input type="checkbox" /> Remmember Me ? </p>
                   <p className='w-146px h-24px font-Space Grotesk not-italic font-medium text-base leading-6 text-center tracking-wider  text-rdx-purple'> Forget Password?</p>
                </div>
                <div className='flex flex-row justify-center items-center px-[10px] py-[16px] gap-[29px] w-[360px] h-[48px] bg-rdx-purple rounded-2xl flex-none order-2 self-stretch grow-0 text-base text-center font-Space Grotesk font-medium '>
                     <button name='Login'  className='flex flex-row justify-between w-[45px] h-[20px] rounded-2xl flex-none order-2 self-stretch grow-0  font-Space Grotesk font-medium text-white text-justify' > Login </button>
                </div>
                </form>
             </div>
               
         </div>   
         
        </>
    );
};

export default LogIn;
