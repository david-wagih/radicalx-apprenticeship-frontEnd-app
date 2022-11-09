import { FC } from 'react';
interface TitleProps {
    text: string;
}
const Title: FC<TitleProps> = ({ text }) => {
    return (
        <div className="order-none mb-4 h-4 w-fit flex-none flex-grow-0 font-sans text-lg font-medium not-italic leading-4 text-gray-900">
            {text}
        </div>
    );
};

export default Title;
