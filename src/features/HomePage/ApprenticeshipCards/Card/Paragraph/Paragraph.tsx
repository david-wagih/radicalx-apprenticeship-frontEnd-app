import { FC, useState } from 'react';
interface ParagraphProps {
    text: string;
}
const Paragraph: FC<ParagraphProps> = ({ text }) => {
    return (
        <div className="w-[325px] font-sans h-16 not-italic font-normal text-sm leading-5 text-gray-900 flex-none order-1 flex-grow-0">
            {text}
        </div>
    );
};

export default Paragraph;
