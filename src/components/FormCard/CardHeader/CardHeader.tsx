import { FC } from 'react';

interface CardHeaderProps {
    text: string;
}

const CardHeader: FC<CardHeaderProps> = ({ text }) => {
    return (
        <p
            className="card-header 
    h-6 not-italic font-medium text-base leading-6 flex items-center text-gray-900 flex-none order-none w-fit flex-grow-0
    "
        >
            {text}
        </p>
    );
};

export default CardHeader;
