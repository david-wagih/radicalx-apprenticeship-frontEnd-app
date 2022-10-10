import { FC } from 'react';
import uuid from 'react-uuid';

import CreateButton from '../../CreateButton/CreateButton';
import Card from '../Card/Card';

interface ApprenticeshipCardsProps {
    apprenticeships: {
        id: string;
        title: string;
        description: string;
        tags: string[];
    }[];
}

const ApprenticeshipCards: FC<ApprenticeshipCardsProps> = ({
    apprenticeships
}) => {
    return (
        <div className="flex flex-col items-start p-0 absolute gap-32px w-[1250px] min-h-[298px] h-fit left-[311px] top-[57px]">
            <div className="flex flex-row justify-between items-center p-0 flex-none order-none flex-grow-0 gap-[626px] w-[1135px] h-1/5">
                <p className="w-64 h-6 not-italic font-semibold text-3xl leading-6 flex items-center text-gray-900 flex-none order-none flex-grow-0">
                    Apprenticeship
                </p>
                <CreateButton />
            </div>
            <div className="cards w-4/6 h-fit grid grid-cols-2 gap-y-4 ">
                {apprenticeships &&
                    apprenticeships.map(apprenticeship => (
                        <Card
                            key={uuid()}
                            title={apprenticeship.title}
                            paragraph={apprenticeship.description}
                            tags={apprenticeship.tags}
                            myKey={uuid()}
                            id={apprenticeship.id}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ApprenticeshipCards;