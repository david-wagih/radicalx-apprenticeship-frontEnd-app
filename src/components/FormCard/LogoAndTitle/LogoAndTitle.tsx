import { FC, useState } from 'react';

import { action } from '../../../features/CreatingApprenticeship/Controller';
import InputField from '../../InputField/InputField';

import UploadLogoIcon from './UploadLogoIcon/UploadLogoIcon';
interface LogoAndTitleProps {
    dispatch: (action: action) => void;
    logo?: string;
    title?: string;
    placeholder: string;
}
const LogoAndTitle: FC<LogoAndTitleProps> = ({
    dispatch,
    logo,
    title,
    placeholder
}) => {
    const [file, setFile] = useState<File>();
    const clickUploadLogo = () => {
        document.getElementById('#uploadLogo')?.click();
    };
    const handleUploadingLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'companyLogo', payload: e.target.files?.[0] as File });
        setFile(e.target.files?.[0] as File);
    };
    return (
        <div className="logo-title width-[ 722px] isolate order-1 flex h-20 flex-none flex-grow-0 flex-row items-center gap-[24px] self-stretch p-0">
            <input
                id="#uploadLogo"
                type="file"
                hidden
                accept="image/*"
                size={5000000}
                onChange={handleUploadingLogo}
            />
            <button className="uploading-area" onClick={clickUploadLogo}>
                <div className="z-0 order-none h-20 w-20 flex-none flex-grow-0 rounded-[20px] bg-gray-300">
                    {(file || logo) && (
                        <img
                            src={file ? URL.createObjectURL(file) : logo}
                            alt="logo"
                            className="h-20 w-20 rounded-[20px]"
                        />
                    )}
                </div>
                <UploadLogoIcon />
            </button>
            <InputField
                value={title || ''}
                type="text"
                className="title on z-[1] order-1 flex h-6 w-[480px] flex-none flex-grow-0 items-center border-none text-2xl font-normal not-italic leading-6 text-gray-900 outline-none"
                onChange={e =>
                    dispatch({
                        type: 'apprenticeshipTitle',
                        payload: e.target.value
                    })
                }
                placeholder={placeholder}
                name="title"
            />
        </div>
    );
};

export default LogoAndTitle;
