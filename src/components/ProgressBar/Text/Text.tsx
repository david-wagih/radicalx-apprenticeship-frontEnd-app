import { FC } from 'react';

interface TextProps {
    text: string;
    checked: boolean;
    name: string;
}

const Text: FC<TextProps> = ({ text, checked, name }) => {
    const color = checked ? 'text-purple-600' : 'text-gray-900';
    return (
        <div
            className={`${name}-text
    order-1 flex h-6  w-fit flex-none flex-grow-0 items-center text-base font-medium not-italic leading-6 ${color}    `}
            key={`${name}-text`}
        >
            {text}
        </div>
    );
};

export default Text;
