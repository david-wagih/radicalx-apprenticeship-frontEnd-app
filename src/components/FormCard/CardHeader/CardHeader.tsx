import { FC } from 'react';

import InfoIcon from './InfoIcon/InfoIcon';

interface CardHeaderProps {
    header: string;
}

const CardHeader: FC<CardHeaderProps> = ({ header }) => {
    return (
        <div className="order-none flex h-6 min-w-[750px] flex-none flex-row items-center justify-between  self-start p-0">
            <InfoIcon />
            <p
                className="card-header 
            order-none flex h-6 w-fit flex-none flex-grow-0 items-center text-base font-medium not-italic leading-6 text-gray-900
            "
            >
                {header}
            </p>
        </div>
    );
};

export default CardHeader;
