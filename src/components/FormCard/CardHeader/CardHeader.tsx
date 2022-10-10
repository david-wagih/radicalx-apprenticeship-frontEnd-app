import { FC } from 'react';

import InfoIcon from './InfoIcon/InfoIcon';

interface CardHeaderProps {
    header: string;
}

const CardHeader: FC<CardHeaderProps> = ({ header }) => {
    return (
        <div className="flex flex-row justify-between items-center p-0 h-6 flex-none order-none  min-w-[750px] self-start">
            <InfoIcon />
            <p
                className="card-header 
            h-6 not-italic font-medium text-base leading-6 flex items-center text-gray-900 flex-none order-none w-fit flex-grow-0
            "
            >
                {header}
            </p>
        </div>
    );
};

export default CardHeader;
