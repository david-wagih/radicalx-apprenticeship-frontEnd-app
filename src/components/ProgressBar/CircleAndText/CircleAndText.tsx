import { FC } from 'react';

import Circle from '../Circle/Circle';
import Text from '../Text/Text';
interface CircleAndTextProps {
    text: string;
    checked: boolean;
    name: string;
    myKey: string;
}

const CircleAndText: FC<CircleAndTextProps> = ({
    text,
    checked,
    name,
    myKey
}) => {
    return (
        <div
            className={`${name}-circle-text
        order-none flex h-6 flex-none flex-grow-0 flex-row 
        items-center gap-2 p-0`}
            key={myKey}
        >
            <Circle checked={checked} name={name} />
            <Text text={text} checked={checked} name={name} />
        </div>
    );
};

export default CircleAndText;
