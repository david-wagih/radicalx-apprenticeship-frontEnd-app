import { FC } from 'react';
interface TitleProps {
    text: string;
}
const Title: FC<TitleProps> = ({ text }) => {
    return (
        <div className="w-fit h-4 not-italic font-medium text-lg leading-4 text-gray-900 flex-none order-none flex-grow-0 font-sans mb-4">
            {text}
        </div>
    );
};

export default Title;
