import { FC } from 'react';

import CardHeader from './CardHeader/CardHeader';
import UploadLogo from './UploadLogo/UploadLogo';

const FormCard: FC = () => {
    return (
        <div
            className="form-card box-border flex flex-col items-start p-6 h-fit bg-white flex-none order-none flex-grow-0
        gap-[16px] width-[770px] border-[1px]  border-[#793EF5] border-solid rounded-[24px]
        z-[7]
        "
        >
            <CardHeader text="Company Logo & Apprenticeship Title" />
            <UploadLogo />
        </div>
    );
};

export default FormCard;
