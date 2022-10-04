import { FC, useState } from 'react';
interface TagProps {
    text: string;
    order: string;
}
const Tag: FC<TagProps> = ({ text, order }) => {
    return (
        <div
            className={`box-border flex flex-row items-start w-32 h-6 bg-indigo-100 rounded-lg flex-none order-none flex-grow-0 border-[#793EF5] p-[3px] gap-[10px] justify-center ${order}`}
        >
            <div className="w-24 h-4 not-italic font-medium text-xs leading-4 flex items-center text-purple-600 flex-none order-none flex-grow-0 justify-center ">
                {text}
            </div>
        </div>
    );
};

export default Tag;
