import { FC } from 'react';
import uuid from 'react-uuid';

import CreateButton from '../CreateButton/CreateButton';

import ApprenticeshipCard from './ApprenticeshipCard/ApprenticeshipCard';

interface ApprenticeshipCardsProps {
    apprenticeships?: {
        apprenticeshipId: string;
        title: string;
        description: string;
        tags: string[];
    }[];
}

const ApprenticeshipCards: FC<ApprenticeshipCardsProps> = ({
    apprenticeships
}) => {
    return (
        <div className="absolute left-[311px] top-[57px] flex h-fit  min-h-[298px] w-[1150px] flex-col items-start p-0">
            <div className="order-none flex h-1/5 w-[1135px] flex-none flex-grow-0 flex-row items-center justify-between gap-[626px] p-0">
                <p className="order-none flex h-6 w-64 flex-none flex-grow-0 items-center text-3xl font-semibold not-italic leading-6 text-gray-900">
                    Apprenticeship
                </p>
                <CreateButton />
            </div>
            <div className="cards grid h-fit w-4/6 grid-cols-2 gap-y-4 ">
                {apprenticeships &&
                    apprenticeships.map(apprenticeship => (
                        <ApprenticeshipCard
                            apprenticeshipId={apprenticeship.apprenticeshipId}
                            key={uuid()}
                            title={apprenticeship.title}
                            paragraph={apprenticeship.description}
                            tags={apprenticeship.tags}
                            myKey={uuid()}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ApprenticeshipCards;
