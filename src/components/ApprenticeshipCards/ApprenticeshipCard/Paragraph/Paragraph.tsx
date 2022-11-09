import { FC } from 'react';
interface ParagraphProps {
    text: string;
}
const Paragraph: FC<ParagraphProps> = ({ text }) => {
    return (
        <p className="order-1 h-16 w-[325px] flex-none flex-grow-0 font-sans text-sm font-normal not-italic leading-5 text-gray-900">
            {text.length <= 180
                ? text.slice(0, 180)
                : text.slice(0, 180) + '...'}
        </p>
    );
};

export default Paragraph;
