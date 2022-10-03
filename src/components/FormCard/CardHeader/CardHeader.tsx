import { FC } from 'react';

interface CardHeaderProps {
    header: string;
}

const CardHeader: FC<CardHeaderProps> = ({ header }) => {
    return (
        <p
            className="card-header 
    h-6 not-italic font-medium text-base leading-6 flex items-center text-gray-900 flex-none order-none w-fit flex-grow-0
    "
        >
            {header}
        </p>
    );
};

export default CardHeader;
