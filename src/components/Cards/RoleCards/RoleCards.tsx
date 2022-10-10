import { FC } from 'react';
import uuid from 'react-uuid';

import Card from '../Card/Card';

interface RoleCardsProps {
    apprenticeships: {
        id: string;
        title: string;
        description: string;
        tags: string[];
    }[];
}

const RoleCards: FC<RoleCardsProps> = ({ apprenticeships }) => {
    return (
        <div className="cards w-[770px] h-fit grid grid-cols-2 gap-y-1">
            {apprenticeships.map(apprenticeship => (
                <Card
                    key={uuid()}
                    myKey={apprenticeship.id}
                    title={apprenticeship.title}
                    paragraph={apprenticeship.description}
                    tags={apprenticeship.tags}
                />
            ))}
        </div>
    );
};

export default RoleCards;
