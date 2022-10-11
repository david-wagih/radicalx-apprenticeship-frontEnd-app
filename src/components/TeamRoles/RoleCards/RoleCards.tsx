import { FC } from 'react';
import uuid from 'react-uuid';

import {
    teamRole,
    teamRoles
} from '../../../features/CreatingApprenticeship/Controller';

import RoleCard from './RoleCard/RoleCard';

interface RoleCardsProps {
    neededRoles: teamRoles;
    setNeededRoles: (neededRoles: teamRoles) => void;
    setInitialValues: (initialValues: teamRole) => void;
    setShowModal: (showModal: boolean) => void;
}

const RoleCards: FC<RoleCardsProps> = ({
    neededRoles,
    setNeededRoles,
    setInitialValues,
    setShowModal
}) => {
    return (
        <div className="cards w-[770px] h-fit grid grid-cols-2 gap-y-4">
            {neededRoles.map((neededRole, index) => (
                <RoleCard
                    key={uuid()}
                    myKey={uuid()}
                    title={neededRole.roleName}
                    paragraph={neededRole.roleDescription}
                    tags={neededRole.requiredSkills}
                    index={index}
                    setNeededRoles={setNeededRoles}
                    neededRoles={neededRoles}
                    setInitialValues={setInitialValues}
                    setShowModal={setShowModal}
                />
            ))}
        </div>
    );
};

export default RoleCards;
