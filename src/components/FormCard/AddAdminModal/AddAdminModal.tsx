import { FC, useState } from 'react';

import InputField from '../../InputField/InputField';
import PictureUpload from '../../PictureUpload/PictureUpload';

type AddAdminModalProps = {
    open: boolean;
};

const AddAdminModal: FC<AddAdminModalProps> = ({ open }) => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [linkedin, setLinkedin] = useState('');

    if (!open) return null;

    return (
        <>
            <div className=" z-1000 fixed top-0 left-0 right-0 bottom-0 bg-background-Md ">
                <div className="z-1000 fixed top-1/2 left-1/2 flex	h-[388px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-rdx-purple bg-white p-6">
                    <form className="">
                        <p className="pb-4 text-xl font-medium">
                            Add Team Admin
                        </p>
                        <PictureUpload></PictureUpload>
                        <div className="pt-4">
                            <div className="flex h-[48px] w-[552px] rounded-2xl border-2 border-[#CECECE] bg-[#FFF] ">
                                <img
                                    alt="ProfileIcon"
                                    src="src/assets/Images/profileIconPurple.svg"
                                    className="h-[22px] w-[18px] flex-none translate-y-2.5 translate-x-4 "
                                ></img>
                                <InputField
                                    type="text"
                                    className=" h-[44px] w-[550px] rounded-2xl border-none bg-[#FFF] pl-6 text-[#2F3031] outline-none"
                                    name="name"
                                    defaultValue=""
                                    placeholder="Name"
                                    onChange={e => setName('e.target.Value')}
                                />
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="flex h-[48px] w-[552px] rounded-2xl border-2 border-[#CECECE] bg-[#FFF] ">
                                <img
                                    alt="MailIcon"
                                    src="src/assets/Images/SmsPurple.svg"
                                    className="h-[22px] w-[18px] flex-none translate-y-2.5 translate-x-4 "
                                ></img>
                                <InputField
                                    type="text"
                                    className=" h-[44px] w-[550px] rounded-2xl border-none bg-[#FFF] pl-6 text-[#2F3031] outline-none"
                                    name="email"
                                    defaultValue=""
                                    placeholder="Email"
                                    onChange={e => setMail('e.target.Value')}
                                />
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="flex h-[48px] w-[552px] rounded-2xl border-2 border-[#CECECE] bg-[#FFF] ">
                                <img
                                    alt="LinkIcon"
                                    src="src/assets/Images/LinkPurple.svg"
                                    className="h-[22px] w-[18px] flex-none translate-y-2.5 translate-x-4 "
                                ></img>
                                <InputField
                                    type="text"
                                    className=" h-[44px] w-[550px] rounded-2xl border-none bg-[#FFF] pl-6 text-[#2F3031] outline-none"
                                    name="linkedIn"
                                    defaultValue=""
                                    placeholder="LinkedIn (Optional)"
                                    onChange={e =>
                                        setLinkedin('e.target.Value')
                                    }
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddAdminModal;
