import { FC } from 'react';

const CardText: FC = () => {
    return (
        <div
            className="text-wrapper
        flex flex-row items-center p-0 h-6 flex-none order-1 self-stretch flex-grow-0
        gap-[24px] w-[722px]
        "
        >
            <input
                type="text"
                className="card-text
            w-full h-6 not-italic font-medium text-lg leading-6 flex items-center text-gray-900 flex-none order-none flex-grow-0
            opacity-70
            
            "
            />
        </div>
    );
};

export default CardText;
