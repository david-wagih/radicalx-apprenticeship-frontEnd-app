import { FC } from 'react';
import uuid from 'react-uuid';

import CircleAndText from './CircleAndText/CircleAndText';

interface ProgressBarProps {
    checked: boolean[];
}
const keys = [uuid(), uuid(), uuid(), uuid(), uuid()];
const ProgressBar: FC<ProgressBarProps> = ({ checked }) => {
    const name = ['One', 'Two', 'Three', 'Four', 'Five'];
    const text = [
        'Company Title & Desc.',
        'Team Type',
        'Team Roles',
        'Team Admin',
        'Timeline'
    ];

    return (
        <div
            className="progress-bar
        absolute left-6 top-28 box-border 
       flex h-16 w-[1466px] flex-row sm:
       items-center justify-between gap-5 rounded-3xl border border-solid border-gray-400  p-6
       "
        >
            {checked.map((check, index) => (
                <CircleAndText
                    text={text[index]}
                    checked={check}
                    name={name[index]}
                    myKey={keys[index]}
                    key={keys[index]}
                />
            ))}
        </div>
    );
};

export default ProgressBar;
