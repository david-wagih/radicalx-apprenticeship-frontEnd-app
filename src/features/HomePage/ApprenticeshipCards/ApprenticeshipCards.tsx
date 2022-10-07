import { FC } from 'react';
import uuid from 'react-uuid';

import CreateButton from '../../../components/CreateButton/CreateButton';

import Card from './Card/Card';

interface ApprenticeshipCardsProps {
    titles: string[];
    descriptions: string[];
    tags: string[][];
}

const ApprenticeshipCards: FC<ApprenticeshipCardsProps> = ({
    titles,
    descriptions,
    tags
}) => {
    return (
        <div className="flex flex-col items-start p-0 absolute gap-32px w-[1135px] min-h-[298px] h-fit left-[311px] top-[57px]">
            <div className="flex flex-row justify-between items-center p-0 flex-none order-none flex-grow-0 gap-[626px] w-[1135px] h-1/5">
                <p className="w-64 h-6 not-italic font-semibold text-3xl leading-6 flex items-center text-gray-900 flex-none order-none flex-grow-0">
                    Apprenticeship
                </p>
                <CreateButton />
            </div>
            <div className="cards w-4/6 h-fit grid grid-cols-2 gap-y-4 ">
                {titles.map((title, index) => (
                    <Card
                        title={title}
                        paragraph={descriptions[index]}
                        tags={tags[index]}
                        myKey={uuid()}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ApprenticeshipCards;
