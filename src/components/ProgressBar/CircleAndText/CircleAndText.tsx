import { FC } from 'react';

import Circle from '../Circle/Circle';
import Text from '../Text/Text';
interface CircleAndTextProps {
    text: string;
    checked: boolean;
    name: string;
}

const CircleAndText: FC<CircleAndTextProps> = ({ text, checked, name }) => {
    const marginRight = name === 'One' ? 'mr-24' : 'mr-0';
    return (
        <div
            className={`${name}-circle-text
    order-none flex h-6 w-52 flex-none flex-grow-0 flex-row 
    items-center gap-2 p-0 ${marginRight}`}
        >
            <Circle checked={checked} name={name} />
            <Text text={text} checked={checked} name={name} />
        </div>
    );
};

export default CircleAndText;
